var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
var mocha = require("mocha");
const fizzBuzz = require("../fizzBuzz");
/*
FizzBuzz problem: 
- za broj djeljiv sa 3 funkcija vraća "Fizz"
- za broj djeljiv sa 5 funkcija vraća "Buzz"
- Za broj djeljiv sa 3 i 5 funkcija vraća FizzBuzz
- Za ostale brojeve vratiti undefined
*/


describe('Fizz Buzz problem', function () {

    it('FizzBuzz should be a function', function () {
        fizzBuzz();
    });

    it('ako djeljivo sa 3 ispisi Fizz', function () {
        let result= fizzBuzz(3)
        //assert.fail(); 
        expect(result).to.eq("Fizz");
    });
    it('ako djeljivo sa 5 ispisi Buzz', function () {
        assert.equal(fizzBuzz(5), "Buzz");
        //let result= fizzBuzz(5)
        //assert.fail(); 
    });
    it('ako djeljivo sa 3 i 5 ispisi FizzBuzz', function () {
        expect(fizzBuzz(15)).to.eq("FizzBuzz");
        
    });

     it("Ne smije atititi fizz buzz fizzbuzz za broj kaoji nije djlejiv s 5 u 3", function(){
    //test provjere , mora proci
    //u jednom it samo jedan assert treba biti
    //za ostale br vraca undefine 
    let result = fizzBuzz(4);
    assert.strictEqual(result, undefined);
    }); 

}); 
// R-G-R
