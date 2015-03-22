tct.Gmap = function (callback) {
    this.map = null;
    this.circles = [];
    this.markers = [];
    this.buses = [];
    this.zoom = 12;
    this.infoWindow = null;
    this.locationRequested = callback;
};

tct.Gmap.prototype = {
    createMap: function (elem, lat, lng, zoom) {
        zoom = zoom || 12;
        this.map = new google.maps.Map(elem,
            {
                center: {lat: lat, lng: lng},
                zoom: zoom
            }
        );
        this.addLocateButton();
        return this;
    },
    addLocateButton: function() {
        var btn = document.createElement('div');
        btn.className = 'locate-btn';
        this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(btn);
        google.maps.event.addDomListener(btn, 'click', this.locationRequested);
    },
    addCircle: function(lat, lng) {

        var latLng = new google.maps.LatLng(lat, lng);

        var locate = {
            path: tct.svg.locate,
            fillColor: '#4285f4',
            fillOpacity: 1,
            scale:.06,
            anchor:new google.maps.Point(920, 920),
            strokeColor: '#ffffff',
            strokeWeight:2
        };

        var marker = new google.maps.Marker({
            position: latLng,
            icon: locate,
            map: this.map
        });

        this.circles.push(marker);
        return this;
    },
    addMarker: function (lat, lng, title) {
        var self = this;
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            position: latLng,
            map: self.map,
            title: title
        });
        this.addMarkerClick(marker);
        this.markers.push(marker);
        return this;
    },
    clearMarkers: function () {
        this.markers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.markers = [];
        return this;
    },
    clearCircles: function () {
        this.circles.forEach(function (circle) {
            circle.setMap(null);
        });
        this.circles = [];
        return this;
    },
    addBus: function(lat, lng, title) {
        var bus = {
            path: tct.svg.bus,
            fillColor: '#000000',
            fillOpacity: 1,
            scale: .015,
            rotation:180,
            anchor:new google.maps.Point(700, 700),
            strokeColor: '#222222',
            strokeWeight:.5
        };

        var latLng = new google.maps.LatLng(lat, lng);

        var marker = new google.maps.Marker({
            position: latLng,
            icon: bus,
            map: this.map,
            title: title
        });

        this.addMarkerClick(marker);

        this.buses.push(marker);
        return this;

    },
    addMarkerClick: function(marker) {
        var self = this;
        google.maps.event.addListener(marker, 'click', function() {
            var title = marker.getTitle();
            if (title) {
                if (self.infoWindow != null) self.infoWindow.close();
                self.infoWindow = new google.maps.InfoWindow({
                    content: '<div class="info-window">' + title + '</div>'
                });
                self.infoWindow.open(self.map, marker);
            }
        });
    },
    clearBuses: function() {
        this.buses.forEach(function (marker) {
            marker.setMap(null);
        });
        this.buses = [];
        return this;
    },
    clear: function() {
        this.clearBuses();
        this.clearCircles();
        this.clearMarkers();
        return this;
    },
    center: function (lat, lng) {
        this.map.panTo({
            lat:lat,
            lng:lng
        });
        this.clearCircles();
        this.addCircle(lat, lng);
        return this;
    }
};