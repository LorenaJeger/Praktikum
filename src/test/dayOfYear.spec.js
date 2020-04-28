var assert = require('assert');
const dayOfYear = require("../dayOfYear");

describe('DayOfYear probrojavanje dana', function () {

    it('DayOfYear should be a function', function () {
        dayOfYear();
    });

    it('Dan u godini za datum 1.3.2020', function () {
        assert.equal(dayOfYear(2020,3,1),92);
    });

    it('Dan u godini za datum 1.5.2020', function () {
        assert.equal(dayOfYear(2020,5,1),153);
    });
    it('Dan u godini za datum 1.3.2019', function () {
        assert.equal(dayOfYear(2019,3,1),91);
    });

    });