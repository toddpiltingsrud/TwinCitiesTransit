(function (common) {

    tct.ws = {
        // keep IE from caching web service calls
        v: Math.round(new Date().getTime() / 1000 / 60) - 23708152,
        url: 'https://svc.metrotransit.org/NexTrip/{0}?v={1}&format=json&callback={2}',
        directions: ['', 'SOUTHBOUND', 'EASTBOUND', 'WESTBOUND', 'NORTHBOUND'],

        getJSON: function (url) {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = url;
            document.body.appendChild(s);
        },

        getRoutes: function (callback) {
            this.getRoutesCB = callback;
            var url = common.formatString(this.url, ['Routes', this.v++, 'tct.ws.getRoutesCB']);
            this.getJSON(url);
        },
        getRoutesCB:null,

        getDirections: function (route, callback) {
            this.getDirectionsCB = callback;
            var url = common.formatString(this.url, ['Directions/' + route, this.v++, 'tct.ws.getDirectionsCB']);
            this.getJSON(url);
        },
        getDirectionsCB:null,

        getStops: function (route, direction, callback) {
            this.getStopsCB = callback;
            var url = common.formatString(this.url, ['Stops/' + route + '/' + direction, this.v++, 'tct.ws.getStopsCB']);
            this.getJSON(url);
        },
        getStopsCB:null,

        // args is either [stopNumber] or [route,direction,stop]
        getDepartures: function (args, callback) {
            this.getDeparturesCB2 = callback;
            var url = common.formatString(this.url, [args.join('/'), this.v++, 'tct.ws.getDeparturesCB']);
            this.getJSON(url);
        },
        getDeparturesCB: function (data) {
            this.convertDates(data);
            this.getDeparturesCB2(data);
        },
        getDeparturesCB2:null,

        getVehicleLocations: function (route, callback) {
            this.getVehicleLocationsCB2 = callback;
            var url = common.formatString(this.url, ['VehicleLocations' + '/' + route, this.v++, 'tct.ws.getVehicleLocationsCB']);
            this.getJSON(url);
        },
        getVehicleLocationsCB: function (data) {
            // convert directions to names
            data.forEach(function (loc) {
                loc.RouteDirection = tct.ws.directions[loc.Direction];
            });
            this.convertDates(data, 'LocationTime');
            this.getVehicleLocationsCB2(data);
        },
        getVehicleLocationsCB2:null,

        getRouteDirectionStop: function (routeID, directionID, stopID, callback) {
            var route, stop, timeoutID;

            var direction = {Text: this.directions[directionID], Value: directionID.toString()};

            this.getRoutes(function (data) {
                // iterate through each route to find the route ID
                var i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].Route == routeID) {
                        route = data[i];
                        checkDone();
                        return;
                    }
                }
                route = {Route: routeID};
                checkDone();
            });

            this.getStops(routeID, directionID, function (data) {
                var i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].Value == stopID) {
                        stop = data[i];
                        checkDone();
                        return;
                    }
                }
                stop = {Value: stopID};
                checkDone();
            });

            function checkDone() {
                if (route && direction && stop) {
                    clearTimeout(timeoutID);
                    callback({
                        route: route,
                        direction: direction,
                        stop: stop
                    });
                }
            }

            timeoutID = setTimeout(callback, 10 * 1000);
        },

        convertDates: function (data, field) {
            // create Date objects
            field = field || 'DepartureTime';
            var i, patt = /\d+/;
            data.forEach(function (dep) {
                i = parseInt(dep[field].match(patt));
                dep[field] = new Date(i);
            });
        }

    };

})(tct.common);