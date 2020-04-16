var assert = require("assert");
const arabicToRoman = require('../ArabicToRoman');


describe('Arabic to roman converter', function () {

    it('Arabic to roman converter should be a function', function () {
        arabicToRoman();
        //assert.fail();
    });

    it('ako upises 1 ispisi I', function() {
        let result= arabicToRoman(1)
        assert.equal(result, "I")
    });

    it('ako upises 2 ispisi II', function() {
        let result= arabicToRoman(2)
        assert.equal(result, "II")
    });

    it("ako upises 3 ispisi III", function(){
        let result= arabicToRoman(3)
        assert.equal(result, "III")
    });
});