const intervalSet = require(".");
var tape = require("tape");
tape.test(
    "test 0", {
        interval: 200
    },
    function ({
        plan,
        equal
    }) {
        plan(1);
        const interval = intervalSet(100, 1, number => {
            equal(number, 1, "Object should be passed into function.");
            clearInterval(interval);
        });
    }
);
