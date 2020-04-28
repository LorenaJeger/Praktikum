let pricelist = [
    {from: '2020-01-01', to: '2020-02-01', price: 34.5},
    {from: '2020-02-02', to: '2020-03-01', price: 37.0},
    {from: '2020-03-02', to: '2020-05-15', price: 39.0},
    {from: '2020-05-16', to: '2020-06-15', price: 37.0}
   ]


function hotelPrice(pricelist) {

    pricelist.sort(function(a, b) {
	return a.price - b.price;
    });
    let sortirano = [];
    for(let i = 0; i < pricelist.length; i++) {
	sortirano.push(pricelist[i].price + " : " + pricelist[i].from + " do " + pricelist[i].to);
    }
    return sortirano;
};



hotelPrice(pricelist);
//gtreba ispisati slijedeće:
/*
34.5 : 2020-01-01 do 2020-02-01
37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15
39.0 : ‘2020-03-02 do 2020-05-15
*/


module.exports= hotelPrice;  