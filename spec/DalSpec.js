xdescribe('tct.ws', function () {

    it('should get bus routes', function (done) {
        var self = this;
        self.routes = null;

        tct.ws.getRoutes(function(data){
            //console.log(exclude);
            self.routes = data;
            done();
        });

        expect(self.routes).toBeDefined();
    });

    it('should get directions', function (done) {
        var self = this;
        self.directions = null;

        tct.ws.getDirections('22', function(data) {
            self.directions = data;
            done();
        });

        // [Object{Text: 'NORTHBOUND', Value: '4'}, Object{Text: 'SOUTHBOUND', Value: '1'}]

        expect(self.directions).toBeDefined();
    });

    it('should get stops', function (done) {
        var self = this;
        self.result = null;

        tct.ws.getStops(22, 1, function(data){
            self.result = data;
            done();
        });

        expect(self.result).toBeDefined();
    });

    it('should get departures', function (done) {
        var self = this;
        self.result = null;

        tct.ws.getDepartures([22, 1, 'BCTC'], function(data) {
            console.log(data);
            self.result = data;
            done();
        });


        expect(self.result).toBeDefined();
    });

    it('should get a stop', function (done) {
        var self = this;
        self.result = null;

        tct.ws.getDepartures([17907], function(data) {
            console.log(data);
            self.result = data;
            done();
        });

        expect(self.result).toBeDefined();
    });

    it('should get vehicle locations', function (done) {
        var self = this;
        self.result = null;

        tct.ws.getVehicleLocations(22, function(data) {
            self.result = data;
            done();
        });

        expect(self.result).toBeDefined();
    });

});

describe('tct.mockSvc', function () {

    it('should get bus routes', function (done) {
        var routes = null;

        tct.mockSvc.getRoutes(function(data){
            routes = data;
            done();
        });

        expect(routes).toBeDefined();
    });

    it('should get directions', function (done) {
        var directions = null;

        tct.mockSvc.getDirections('22', function(data) {
            directions = data;
            done();
        });

        expect(directions).toBeDefined();
    });

    it('should get stops', function (done) {
        var result = null;

        tct.mockSvc.getStops(22, 1, function(data){
            result = data;
            done();
        });

        expect(result).toBeDefined();
    });

    it('should get departures', function (done) {
        var result = null;

        tct.mockSvc.getDepartures([22, 1, 'BCTC'], function(data) {
            result = data;
            done();
        });

        expect(result).toBeDefined();
    });

    it('should get a stop', function (done) {
        var result = null;

        tct.mockSvc.getDepartures([17907], function(data) {
            result = data;
            done();
        });

        expect(result).toBeDefined();
    });

    it('should get vehicle locations', function (done) {
        var result = null;

        tct.mockSvc.getVehicleLocations(22, function(data) {
            result = data;
            done();
        });

        expect(result).toBeDefined();
    });

    it('should get route direction & stop from args', function (done) {
        var result = null;

        tct.mockSvc.getRouteDirectionStop(22, 1, 'BCTC', function(data) {
            result = data;
            // not sure why, but the Jasmine doesn't wait for done()
            // before executing the tests, so stuck them in here
            expect(result.route).toBeDefined();
            expect(result.direction).toBeDefined();
            expect(result.stop).toBeDefined();
            done();
        });

    });

});

describe('tct.faves', function () {

    it('should load faves', function () {

        var faves = new tct.Faves();

        expect(faves.dict).toBeDefined();
    });

    it('should save a fave', function () {

        var route, direction, stop;

        route = tct.routes[0];

        direction = tct.directions[0];

        stop = tct.stops[0];

        var fave = new tct.Fave({
            route:route,
            direction:direction,
            stop:stop
        });

        expect(fave.isValid).toEqual(true);

        expect(fave.key).toEqual('901-4-BCTC');

        expect(fave.title).toBeDefined();

        var faves = new tct.Faves();

        faves.add(fave);

        expect(faves.dict[fave.key]).toEqual(fave);
    });

    it('should load saved faves', function () {
        var faves = new tct.Faves();

        expect(faves.dict['901-4-BCTC']).toBeDefined();
        expect(faves.dict['901-4-BCTC'].isValid).toEqual(true);
        expect(faves.dict['901-4-BCTC'].title).toBeDefined();
        expect(faves.dict['901-4-BCTC'].key).toBeDefined();
        expect(faves.dict['901-4-BCTC'].getArgs).toBeDefined();
    });

    it('should list faves', function () {
        var faves = new tct.Faves();

        var ar = faves.getList();

        expect(ar.length).toEqual(1);

        var fave = ar[0];

        expect(fave.isValid).toEqual(true);
        expect(fave.title).toBeDefined();
        expect(fave.key).toBeDefined();
        expect(fave.getArgs).toBeDefined();

    });

    it('should hold a current fave', function () {
        var faves = new tct.Faves();

        var fave = faves.getCurrent();

        expect(fave.isValid).toEqual(true);
        expect(fave.title).toBeDefined();
        expect(fave.key).toBeDefined();
        expect(fave.getArgs).toBeDefined();



    });

    it('should hold a current fave', function () {
        var faves = new tct.Faves();

        var fave = faves.getCurrent();

        expect(fave.isValid).toEqual(true);
        expect(fave.title).toBeDefined();
        expect(fave.key).toBeDefined();
        expect(fave.getArgs).toBeDefined();

        fave.route = tct.routes[0];

        fave.direction = tct.directions[0];

        fave.stop = tct.stops[0];

        faves.setCurrent(fave);
    });

    it('should hold a current fave', function () {
        var faves = new tct.Faves();

        var fave = faves.getCurrent();

        expect(fave.isValid).toEqual(true);
        expect(fave.title).toBeDefined();
        expect(fave.key).toBeDefined();
        expect(fave.getArgs).toBeDefined();

        var route, direction, stop;

        route = tct.routes[0];

        direction = tct.directions[0];

        stop = tct.stops[0];

        expect(fave.route).toEqual(route);
        expect(fave.direction).toEqual(direction);
        expect(fave.stop).toEqual(stop);

    });

});

describe('tct.common.stops', function () {

    it('should find a stop', function () {

        var stop = tct.common.getStop(34);

        expect(stop).toBeDefined();
        expect(stop.id).toEqual(34);
        expect(stop.desc).toBeDefined();
        expect(stop.lat).toBeDefined();
        expect(stop.lng).toBeDefined();
    });

    it('should the nearest stops', function () {

        var pos = { lat: 44.9833, lng: -93.2667}; // Minneapolis

        var stops = tct.common.closestStops(pos.lat, pos.lng);

        //console.log(stops);

        stops.forEach(function(stop){
            expect(stop).toBeDefined();
            expect(stop.id).toBeDefined();
            expect(stop.desc).toBeDefined();
            expect(stop.lat).toBeDefined();
            expect(stop.lng).toBeDefined();
        });
    });

});

