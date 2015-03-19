'use strict';

var tct = tct || {};

tct.BindingList = function() {
    // the goal is to avoid setting this array to another instance
    // and to preserve the objects in it as well
    // this makes it possible to animate the UI when object values change
    this.list = [];
};

tct.BindingList.prototype = {

    adjust: function(arg) {
        var newLength = 0;
        if (arg) {
            newLength = Array.isArray(arg) ? arg.length : arg;
        }
        while (this.list.length < newLength) {
            this.list.push({});
        }
        while (this.list.length > newLength && this.list.length > 0) {
            // TODO: some binding scenarios might require popping objects
            // from the end of the list instead of shifting them from the front
            this.list.shift();
        }
    },

    sync:function(arr) {
        var props, i, self = this;
        if (arr) {
            this.adjust(arr.length);
            if (arr.length > 0) {
                // copy object properties from arr to list
                props = Object.getOwnPropertyNames(arr[0]);
                for (i = 0; i < arr.length; i++) {
                    props.forEach(function(prop){
                        self.list[i][prop] = arr[i][prop];
                    });
                }
            }
        }
        else {
            this.adjust(0);
        }
    }

};