'use strict';

tct.transit = angular.module("transit", ['ngRoute']);

(function(common, t) {

    t.config(
        ['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                    when('/faves', {
                        templateUrl: 'partials/faves.html',
                        controller: 'faves'
                    }).
                    when('/track', {
                        templateUrl: 'partials/track.html',
                        controller: 'track'
                    }).
                    when('/stop', {
                        templateUrl: 'partials/stop.html',
                        controller: 'stop'
                    }).
                    when('/map', {
                        templateUrl: 'partials/map.html',
                        controller: 'map'
                    }).
                    when('/about', {
                        templateUrl: 'partials/about.html',
                        controller: 'common'
                    }).
                    when('/acerca', {
                        templateUrl: 'partials/acerca.html'
                    }).
                    otherwise({
                        templateUrl: 'partials/home.html',
                        controller: 'home'
                    });
            }
        ]
    );

    t.factory('svc', function () {
        //return tct.mockSvc;
        return tct.ws;
    });

    t.service('busStops', ['$http', function ($http) {

        var busStops = function() {
            var self = this;
            this.stops = null;
            this.queue = [];

            var processQueue = function() {
                var request;
                while (self.queue.length > 0) {
                    request = self.queue.shift();
                    request.func.apply(self, request.args);
                }
            };

            $http.get('scripts/stops.js')
                .success(function(data){
                    self.stops = data;
                    processQueue();
                })
                .error(function(){});
        };

        busStops.prototype = {
            enQueue: function(func, args) {
                var request = {
                    func:func, args:args
                };
                this.queue.push(request);
            },
            midpoint: function(min, max) {
                return Math.round(min + (max - min) / 2);
            },
            binarySearch: function(key, arr, keyOrdinal){
                keyOrdinal = keyOrdinal || 0;
                var min = 0, max = arr.length - 1;
                var mid = 0;

                // use a binary search algorithm to find the row
                while (max >= min) {
                    // calculate the midpoint for roughly equal partition
                    mid = this.midpoint(min, max);
                    if (arr[mid][keyOrdinal] == key)
                    // key found at index mid
                        return arr[mid];
                    // determine which subarray to search
                    else if (arr[mid][keyOrdinal] < key)
                    // change min index to search upper subarray
                        min = mid + 1;
                    else
                    // change max index to search lower subarray
                        max = mid - 1;
                }
                // key was not found
                return null;

            },
            getStop : function(stopNbr, callback) {
                if (this.stops === null) {
                    this.enQueue(this.getStop, [stopNbr, callback]);
                    callback(null);
                    return;
                }
                var stop = this.binarySearch(stopNbr, this.stops);
                if (stop !== null) {
                    callback({
                        id:stop[0],
                        desc:stop[1],
                        lat:stop[2],
                        lng:stop[3]
                    });
                }
                else {
                    callback(null);
                }
            },
            closestStops : function(lat, lng, callback) {
                if (this.stops === null) {
                    this.enQueue(this.closestStops, [lat, lng, callback]);
                    callback(null);
                    return;
                }

                var qry = gryst.
                    from(this.stops, "s").
                    orderBy("s", function(s1, s2){
                        // sort by how far away it is from pos
                        var diff1 = Math.abs(s1[2] - lat) + Math.abs(s1[3] - lng);
                        var diff2 = Math.abs(s2[2] - lat) + Math.abs(s2[3] - lng);
                        return diff1 - diff2;
                    }).
                    take(20).
                    select(function(s){
                        return {
                            id:s[0],
                            desc:s[1],
                            lat:s[2],
                            lng:s[3]
                        };
                    }).
                    run();

                callback(qry);
            }
        };

        return new busStops();
    }]);

    t.factory('faves', ['svc', function (svc) {
        return new tct.Faves(svc);
    }]);

    t.service('timer', ['$rootScope', function ($rootScope) {

        var timer = function () {
            var id, self = this;
            var start = new Date();
            this.millis = 30000;
            this.percent = 100;
            this.interval = self.millis / 100;

            this.start = function () {
                self.interval = self.millis / 100;
                start = new Date();
                id = setInterval(tick, self.interval);
            };

            this.stop = function () {
                clearInterval(id);
            };

            Object.defineProperty(this, 'time', {
                get: function () {
                    var now = new Date();
                    return now - start;
                }
            });

            var tick = function () {
                // calculate percentage and color
                self.percent = 100 - Math.round(self.time / self.millis * 100);
                if (self.percent <= 0) {
                    // reset
                    start = new Date();
                    self.percent = 100;
                    $rootScope.$broadcast('timerBuzz', self);
                }
                $rootScope.$broadcast('timerTick', self);
            };
        };

        return new timer();

    }]);

    t.factory('geoLocate', ['$rootScope', function ($rootScope) {

        var geoLocateService = function() {
            var self = this;
            var lastLocation = 'lastLocation';
            var store = new Lawnchair({
                adapter: "dom",
                name: "transit"
            }, function (store) {});
            this.locationChanged = 'geoLocate_LocationChanged';
            this.default = {lat: 44.9833, lng: -93.2667}; // Minneapolis
            this.geoLocation = true;
            this.getCurrent = function() {
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function(position) {
                            $rootScope.$broadcast(self.locationChanged, {
                                lat:position.coords.latitude,
                                lng:position.coords.longitude
                            });
                            self.setLast(position.coords.latitude, position.coords.longitude);
                        },
                        function() {
                            // user denied
                            $rootScope.$broadcast(self.locationChanged, null);
                        }
                    );
                }
                // Browser doesn't support Geo-location
                else {
                    self.geoLocation = false;
                    $rootScope.$broadcast(self.locationChanged, null);
                }
            };
            this.getLast = function(callback) {
                // check storage for the last position
                store.get(lastLocation, function (position) {
                    if (position && position.value) {
                        callback(position.value);
                    }
                    else {
                        callback(self.default);
                    }
                });
            };
            this.setLast = function(lat, lng) {
                var pos = {lat:lat, lng:lng};
                store.save({key: lastLocation, value: pos});
            };
            // set the default to the last known position
            this.getLast(function(pos){
                if (pos !== null && common.hasValue(pos.lat) && common.hasValue(pos.lng)) {
                    self.default = pos;
                    $rootScope.$broadcast(self.locationChanged, pos);
                }
            });
        };

        return new geoLocateService();
    }]);

    t.factory('lang', function () {

        var store = new Lawnchair({
            adapter: "dom",
            name: "transit"
        }, function (store) {
        });

        var languages = {
            current: {},
            English: {
                name: 'English',
                alternate: 'Español',
                about: 'About',
                aboutRoute: 'about',
                home: 'Home',
                favorites: 'Favorites',
                selectRoute: 'Select a route...',
                selectDirection: 'Select a direction...',
                selectStop: 'Select a stop...',
                enterStopNumber: 'Enter stop number...',
                stopNumber: 'Stop number',
                route: 'Route',
                northBound: 'NORTHBOUND',
                southBound: 'SOUTHBOUND',
                westBound: 'WESTBOUND',
                eastBound: 'EASTBOUND',
                map: 'Map',
                findMe:'Find me'
            },
            Spanish: {
                name: 'Español',
                alternate: 'English',
                about: 'Acerca',
                aboutRoute: 'acerca',
                home: 'Portada',
                favorites: 'Favoritos',
                selectRoute: 'Seleccione una ruta...',
                selectDirection: 'Seleccione una dirección...',
                selectStop: 'Seleccione una parada...',
                enterStopNumber: 'Introduzca número de parada...',
                stopNumber: 'Parada',
                route: 'Ruta',
                northBound: 'Norte',
                southBound: 'Sur',
                westBound: 'Oeste',
                eastBound: 'Este',
                map: 'Mapa',
                findMe:'Encontrarme'
            },
            setCurrent: function (name) {
                var self = this;
                var newLang = this[name];
                var props = Object.getOwnPropertyNames(newLang);
                // set the properties on current instead of swapping it out completely
                // in order to preserve binding context
                props.forEach(function (prop) {
                    self.current[prop] = newLang[prop];
                });
                store.save({key: 'currentLanguage', value: name});
            }
        };

        store.get('currentLanguage', function (lang) {
            if (lang) {
                languages.setCurrent(lang.value);
            }
            else {
                languages.setCurrent('English');
            }
        });

        return languages;
    });

    t.filter('tct_translate', ['lang', function (lang) {
        var props = Object.getOwnPropertyNames(lang.English);
        var english = [];
        var translation = [];
        props.forEach(function (prop) {
            english.push(lang.English[prop]);
            translation.push(lang.current[prop]);
        });
        return function (input) {
            if (lang.current.name == 'English') return input;
            var i;
            for (i = 0; i < english.length; i++) {
                input = input.replace(english[i], translation[i]);
            }
            return input;
        };
    }]);

    // busStops will trigger loading the stops script
    t.controller('home', ['$scope', 'faves', '$location', 'svc', 'lang', 'busStops',
        function ($scope, faves, $location, svc, lang, busStops) {

            $scope.model = new tct.Fave();

            $scope.routes = [];
            $scope.directions = [];
            $scope.stops = [];
            $scope.lang = lang.current;

            svc.getRoutes(function (data) {
                $scope.$apply(function () {
                    $scope.routes = data;
                });
            });

            $scope.$watch('model.route', function () {
                if ($scope.model.route) {
                    $scope.stops = [];
                    $scope.model.direction = null;
                    $scope.model.stop = null;
                    svc.getDirections($scope.model.route.Route, function (data) {
                        $scope.$apply(function () {
                            $scope.directions = data;
                        });
                    });
                }
            });

            $scope.$watch('model.direction', function () {
                if ($scope.model.direction) {
                    $scope.stops = [];
                    $scope.model.stop = null;
                    svc.getStops($scope.model.route.Route, $scope.model.direction.Value, function (data) {
                        $scope.$apply(function () {
                            $scope.stops = data;
                        });
                    });
                }
            });

            $scope.$watch('model.stop', function () {
                if ($scope.model.stop) {
                    faves.setCurrent($scope.model);
                    // redirect to track
                    $location.path('/track')
                }
            });

            $scope.trackStopNumber = function () {
                if ($scope.model.stopNumber) {
                    $scope.model.route = null;
                    $scope.model.direction = null;
                    $scope.model.stop = null;
                    faves.setCurrent($scope.model);
                    // redirect to track
                    $location.path('/stop');
                }
            };

        }]);

    t.controller('common', ['$scope', 'lang', function ($scope, lang) {
        $scope.lang = lang.current;
    }]);

    t.controller('track', ['$scope', 'faves', '$location', 'svc', 'timer', 'lang',
        function ($scope, faves, $location, svc, timer, lang) {
            var bindingList = new tct.BindingList();
            var args, dt;
            var search = $location.search();

            $scope.lang = lang;
            $scope.faves = faves;
            $scope.departures = bindingList.list;

            var track = function () {
                args = $scope.model.getArgs();
                svc.getDepartures(args, function (data) {
                    // calculate  number of minutes until departure time
                    dt = new Date();
                    data = data.slice(0, 8);
                    $scope.$apply(function () {
                        bindingList.adjust(data);
                    });
                    // setting the scope before calculating the percentage animates the bars
                    data.forEach(function (departure) {
                        departure.Minutes = common.dateDiff(departure.DepartureTime, dt);
                        departure.Percent = (departure.Minutes / 60) * 100;
                        departure.Percent = departure.Percent > 100 ? 100 : departure.Percent;
                    });
                    bindingList.sync(data);
                });
            };

            // this function is necessary because there is
            // the possibility that it will need to be called
            // async when a key is referenced when there is no
            // corresponding Fave in storage
            var done = function () {
                if ($scope.model.isValid == false) {
                    $location.path('/home');
                    return;
                }

                timer.start();

                track();

                $scope.$on('timerBuzz', track);

                $scope.$on('$destroy', timer.stop);
            };

            if (common.hasValue(search) && common.hasValue(search.key)) {
                faves.resolve(search.key, function (fave) {
                    $scope.model = fave;
                    faves.setCurrent(fave);
                    done();
                });
            }
            else {
                $scope.model = faves.getCurrent();
                done();
            }

        }
    ]);

    t.controller('stop', ['$scope', 'faves', '$location', 'svc', 'timer', 'lang', 'busStops',
        function ($scope, faves, $location, svc, timer, lang, busStops) {
            $scope.faves = faves;
            $scope.lang = lang.current;
            // check for a key parameter
            var fave, search = $location.search();
            var stopNumber = search.key;
            var departures = {};

            var track = function () {
                var args = $scope.model.getArgs();
                svc.getDepartures(args, function (data) {
                    var qry = gryst.
                        from(data, "a").
                        orderBy("a.Route").
                        thenBy("a.DepartureTime").
                        group(
                        "a",
                        function (a) {
                            return a.Route + a.RouteDirection;
                        },
                        "a"
                    ).
                        select(function (a) {
                            if (departures.hasOwnProperty(a.key) == false) {
                                departures[a.key] = new tct.BindingList();
                            }
                            departures[a.key].sync(a.values.slice(0, 8));
                            return departures[a.key].list;
                        }).run();

                    $scope.$apply(function () {
                        $scope.departures = qry;
                    });

                    var dt = new Date();
                    qry.forEach(function (bindingList) {
                        bindingList.forEach(function (departure) {
                            departure.Minutes = common.dateDiff(departure.DepartureTime, dt);
                            departure.Percent = (departure.Minutes / 60) * 100;
                            departure.Percent = departure.Percent > 100 ? 100 : departure.Percent;
                        });
                    });
                });
            };

            var done = function () {
                $scope.model = fave;
                $scope.getColor = common.getColor;

                if ($scope.model.isValid == false) {
                    $location.path('/home');
                    return;
                }

                timer.start();

                track();

                $scope.$on('timerBuzz', track);

                $scope.$on('$destroy', timer.stop);
            };

            if (stopNumber) {
                fave = faves.resolve(stopNumber);
            }
            else {
                fave = faves.getCurrent();
            }

            if (common.hasValue(fave.stopNumber) && common.hasValue(fave.busStop) == false) {
                console.log(busStops);
                busStops.getStop(fave.stopNumber, function (busStop) {
                    fave.busStop = busStop;
                    // save it so we don't have to load stops next time
                    faves.setCurrent(fave);
                    done();
                });
            }
            else {
                done();
            }
        }
    ]);

    t.controller('map', ['$scope', 'lang', 'svc', '$location', 'timer', 'faves', 'geoLocate', 'busStops',
        function ($scope, lang, svc, $location, timer, faves, geoLocate, busStops) {
            $scope.lang = lang.current;

            var populateMap, map, search = $location.search();

            var gmap = new tct.Gmap(geoLocate.getCurrent);

            var elem = document.getElementById('map-canvas');

            var done = function () {
                // create the map and center it
                if ($scope.model.busStop) {
                    $scope.title = lang.current.stopNumber + ' ' + $scope.model.busStop.id + ' ' + $scope.model.busStop.desc;

                    // center the map on busStop
                    gmap.createMap(elem, $scope.model.busStop.lat, $scope.model.busStop.lng);

                    gmap.addMarker(
                        $scope.model.busStop.lat,
                        $scope.model.busStop.lng,
                        common.formatString('{0} {1} {2}', [
                            lang.current.stopNumber,
                            $scope.model.busStop.id,
                            $scope.model.busStop.desc
                        ])
                    );
                }
                else {
                    $scope.title = lang.current.route + ' ' + $scope.model.route.Route;
                    // center the map on the default position
                    gmap.createMap(elem, geoLocate.default.lat, geoLocate.default.lng, 13);
                }

                gmap.addCircle(geoLocate.default.lat, geoLocate.default.lng);

                // check if it's a stop number or route-direction-stop
                if ($scope.model.stopNumber) {
                    populateMap = function () {
                        gmap.clearBuses();
                        svc.getDepartures([$scope.model.stopNumber], function (data) {
                            data.forEach(function (location) {
                                var title = common.formatString('{0} {1} {2} - {3}', [
                                    location.Route,
                                    location.Terminal,
                                    location.RouteDirection,
                                    location.Description
                                ]);
                                gmap.addBus(location.VehicleLatitude, location.VehicleLongitude, title);
                            });
                        });
                    };
                }
                else {
                    populateMap = function () {
                        gmap.clearBuses();
                        svc.getVehicleLocations($scope.model.route.Route, function (data) {
                            data.forEach(function (location) {
                                var title = location.Route + location.Terminal + ' ' + location.RouteDirection;
                                gmap.addBus(location.VehicleLatitude, location.VehicleLongitude, title);
                            });
                        });
                    };
                }

                var updateLocation = function(evt, position) {
                    if (position) {
                        gmap.center(position.lat, position.lng);
                    }
                };

                populateMap();

                timer.start();

                $scope.$on(geoLocate.locationChanged, updateLocation);

                $scope.$on('timerBuzz', populateMap);

                $scope.$on('$destroy', timer.stop);
            };

            // check for a route parameter
            if (search && search.key) {
                faves.resolve(search.key, function (fave) {
                    $scope.model = fave;
                    faves.setCurrent(fave);
                    if (common.hasValue(fave.stopNumber) && !common.hasValue(fave.busStop)) {
                        // get the bus stop from the busStop service
                        busStops.getStop(fave.stopNumber, function (busStop) {
                            if (busStop !== null) {
                                fave.busStop = busStop;
                                // save it
                                faves.setCurrent(fave);
                            }
                            done();
                        });
                    }
                    else {
                        done();
                    }
                });
            }
            else {
                $scope.model = faves.getCurrent();
                done();
            }

        }
    ]);

    t.controller('faves', ['$scope', 'faves', 'lang', function ($scope, faves, lang) {
        $scope.lang = lang.current;
        $scope.model = faves;
        $scope.list = faves.getList();
        $scope.list.forEach(function (fave) {
            fave.path = fave.stopNumber ? 'stop' : 'track';
        });
    }]);

})(tct.common, tct.transit);

/*------------------*/
/* directives       */
/*------------------*/

(function (t) {

    t.directive('tctClock', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/clock.html',
            link: function (scope, el) {

                var id, divs = el.find("div");

                console.log(divs);

                function tick() {
                    var am_pm, d = new Date();
                    var hr = d.getHours();
                    am_pm = (hr < 12) ? 0 : 1;
                    if (hr == 0) {
                        hr = 12;
                    }
                    else if (hr > 12) {
                        hr = (hr - 12);
                    }

                    var h1 = Math.floor(hr / 10);
                    var h2 = hr - h1 * 10;
                    var m1 = Math.floor(d.getMinutes() / 10);
                    var m2 = d.getMinutes() - m1 * 10;
                    var s1 = Math.floor(d.getSeconds() / 10);
                    var s2 = d.getSeconds() - s1 * 10;
                    setDigit(divs[1], h1, 2);
                    setDigit(divs[2], h2, 10);
                    setDigit(divs[4], m1, 6);
                    setDigit(divs[5], m2, 10);
                    setDigit(divs[7], s1, 6);
                    setDigit(divs[8], s2, 10);
                    setDigit(divs[9], am_pm, 2);
                }

                function setDigit(elem, digit, upperLimit) {
                    var posClass, current = elem.currentDigit;
                    if (digit == 0) {
                        digit = upperLimit;
                    }
                    // return if the digit has not changed
                    if (typeof current !== 'undefined' && current == digit) {
                        return;
                    }

                    elem.currentDigit = digit;
                    posClass = "pos-" + digit;
                    $(elem).addClass(posClass);

                    if (elem.posClass) {
                        // remove the previous one
                        $(elem).removeClass(elem.posClass);
                    }
                    elem.posClass = posClass;

                    if (elem.currentDigit == upperLimit) {
                        setTimeout(function () {
                            $(elem).removeClass(elem.posClass);
                        }, 600);
                    }
                }

                tick();

                id = setInterval(tick, 1000);

                el.on('$destroy', function () {
                    clearInterval(id);
                });
            }
        };
    });

    t.directive('tctTracker', ['faves', function (faves) {
        return {
            restrict: 'E',
            templateUrl: 'partials/tracker.html',
            link: function (scope) {
                // scope contains an instance of Fave
                scope.faves = faves;
                scope.getColor = tct.common.getColor;
            }
        };
    }]);

    t.directive('tctCountdown', ['timer', function (timer) {
        return {
            restrict: 'E',
            templateUrl: 'partials/countdown.html',
            link: function (scope, el) {
                var img = el.find('img')[0];
                scope.percent = 100;
                scope.interval = timer.interval / 1000;
                scope.$on('timerTick', function () {
                    scope.$apply(function () {
                        scope.percent = timer.percent;
                    });
                });
            }
        };
    }]);

    t.directive('tctLanguage', ['lang', '$route', function (lang, $route) {
        return {
            restrict: 'A',
            link: function (scope, el) {
                $(el).click(function () {
                    var currentLang = lang.current.name;
                    lang.setCurrent(currentLang == 'English' ? 'Spanish' : 'English');
                    $route.reload();
                });
            }
        };
    }]);

})(tct.transit);