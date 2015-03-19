'use strict';

(function (t) {

    t.directive('tctClock', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/clock.html',
            link: function (scope, el) {

                var id, divs = el.find("div");

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
                    if (current != undefined && current == digit) {
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