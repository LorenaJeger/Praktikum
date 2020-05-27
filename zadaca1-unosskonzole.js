let polje=[];
let brojac=0;

while(tekst!='.'){
	var tekst = prompt("Upisi tekst");
	polje=polje+" "+ tekst;
	brojac++ 
 }
brojac=brojac-1;   //ne zelim da mi u unos broji tocku

console.log("br unesenih rijeci: ",brojac);
console.log("ispis inosa", polje);

