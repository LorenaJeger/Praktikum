var assert = require('assert');
const hotelPrice = require("../hotelPrice");

describe('HotelPrice  ispisuje cijenu smjestaja', function () {

    it('hotelPrice should be a function', function () {
        hotelPrice();

    });

     it('treba ispisati sljedece', function() {
        let result= hotelPrice();
       expect(hotelPrice).to.be.a('34.5 : 2020-01-01 do 2020-02-01, 37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15, 39.0 : 2020-03-02 do 2020-05-15');
       // expect(result).to.eq( 
       //assert.equal(hotelPrice(),
        //"34.5 : 2020-01-01 do 2020-02-01, 37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15, 39.0 : 2020-03-02 do 2020-05-15 ");
        

        });  
 
});
