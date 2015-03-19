'use strict';

tct.common = {
    // helper functions
    getColor: function(percent) {
        // transition from green to red as the percentage approaches zero
        var green = Math.round(99 * (percent / 100));
        var red = 99 - green;
        var ar = [];
        ar.push('#');
        if (red < 10) {
            ar.push('0');
        }
        ar.push(red);
        if (green < 10) {
            ar.push('0');
        }
        ar.push(green);
        ar.push('00');
        return ar.join('');
    },
    hasValue : function(val) {
        return typeof val != 'undefined' && val !== null;
    },
    dateDiff: function (date1, date2) {
        // calculate the number of minutes between the two dates
        return Math.ceil(Math.abs(date1 - date2) / 1000 / 60);
    },
    formatString: function (str, args) {
        args = Array.isArray(args) ? args : [args];
        var index = 0;
        var token = "{" + index.toString() + "}";
        while (str.indexOf(token) != -1) {
            if (args.length > index) {
                str = str.replace(new RegExp("\\{" + index.toString() + "\\}", "g"), args[index].toString());
            }
            else {
                str = str.replace(new RegExp("\\{" + index.toString() + "\\}", "g"), "");
            }
            index++;
            token = "{" + index.toString() + "}";
        }
        return str;
    }

};
