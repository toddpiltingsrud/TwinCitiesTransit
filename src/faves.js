/**
 * Created by Piltingsrud on 1/14/2015.
 */
'use strict';

tct.Fave = function(obj) {
    var self = this;
    this.route = null;
    this.direction = null;
    this.stop = null;
    this.stopNumber = null;
    this.busStop = null;

    if (obj) {
        this.route = obj.route;
        this.direction = obj.direction;
        this.stop = obj.stop;
        this.stopNumber = obj.stopNumber;
        this.busStop = obj.busStop;
    }

    Object.defineProperty(this, "isValid", {
        get: function() {
            return ((tct.common.hasValue(self.route)
            && tct.common.hasValue(self.direction)
            && tct.common.hasValue(self.stop))
            || tct.common.hasValue(self.stopNumber));
        }
    });

    Object.defineProperty(this, "key", {
        get: function() {
            if (self.isValid) {
                return self.getArgs().join('-');
            }
            return null;
        }
    });

    Object.defineProperty(this, "title", {
        get: function() {
            if (self.isValid == false) {
                return null;
            }
            if (self.busStop) {
                return ['Stop number ' + self.busStop.id, self.busStop.desc];
            }
            if (tct.common.hasValue(self.stopNumber)) {
                return ['Stop number ' + self.stopNumber];
            }
            return ['Route ' + self.route.Route + ' - ' + self.direction.Text, self.stop.Text];
        }
    });
};

tct.Fave.prototype = {
    getArgs:function() {
        if (this.isValid) {
            if (this.stopNumber) {
                return [this.stopNumber];
            }
            return [this.route.Route, this.direction.Value, this.stop.Value];
        }
    }
};

tct.Faves = function(svc) {
    this.dict = {};
    this.svc = svc;
    this.store = new Lawnchair({
        adapter: "dom",
        name: "transit"
    }, function(store){});
    this.load();
};

tct.Faves.prototype = {
    // isFave and toggleFave used by partials/tracker.html
    isFave:function(fave) {
        if (tct.common.hasValue(fave) && fave.isValid == false) return false;
        return this.dict.hasOwnProperty(fave.key);
    },
    toggleFave:function(fave) {
        if (this.isFave(fave)) {
            this.remove(fave);
        }
        else {
            this.add(fave);
        }
    },
    getCurrent:function() {
        var current, self = this;
        this.store.get('current', function(obj){
            if (obj) {
                // rehydrate the stored value.
                current = new tct.Fave(obj.value);
            }
            else {
                current = new tct.Fave();
                self.setCurrent(current);
            }
        });
        return current;
    },
    setCurrent:function(fave) {
        this.store.save({key:'current', value:fave});
        if (this.isFave(fave)) {
            // save it in case the fave has been modified
            this.add(fave);
        }
    },
    get: function(key) {
        return this.dict[key];
    },
    add: function(fave) {
        this.dict[fave.key] = fave;
        this.save();
    },
    remove: function(fave) {
        delete this.dict[fave.key];
        this.save();
    },
    load: function() {
        var dict, props, self = this;
        this.store.get('nextripfaves', function(obj){
            dict = obj ? obj.faves : {};
        });
        this.dict = {};
        props = Object.getOwnPropertyNames(dict);
        props.forEach(function(prop){
            // Lawnchair doesn't store custom properties or functions
            // so we need to rehydrate the stored value.
            self.dict[prop] = new tct.Fave(dict[prop]);
        });
        return this.dict;
    },
    save: function() {
        var self = this;
        this.store.save({key:'nextripfaves', faves:self.dict});
    },
    getList: function() {
        var self = this;
        var ar = [];
        var props = Object.getOwnPropertyNames(this.dict);
        props.forEach(function(prop){
            ar.push(self.dict[prop]);
        });
        return ar;
    },
    resolve: function(key, callback) {
        var id, fave = this.get(key);

        if (fave) {
            if (callback) {
                callback(fave);
            }
            return fave;
        }
        else {
            var args = key.split('-');
            if (args.length == 1) {
                // it's a stop number
                // create a new one
                fave = new tct.Fave({
                    stopNumber: args[0]
                });
                if (callback) {
                    callback(fave);
                }
                return fave;
            }
            else if(callback) {
                // it's route, direction, stop
                id = setTimeout(callback, 10 * 1000);
                this.svc.getRouteDirectionStop(args[0], args[1], args[2], function(obj){
                    clearTimeout(id);
                    fave = new tct.Fave(obj);
                    callback(fave);
                });
            }
        }

    }
};