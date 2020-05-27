function dayOfYear(year, month, day) {   //sva 3 argumenta su cijeli brojevi
 
    let mjeseci=[31,28,31,30,31,30,31,30,31,30,31,30];
    let suma=0;
    for(var i=0; i <= month-1; i++){

        suma+=mjeseci[i];

    }

    if(month>2 && year % 4 ==0){
        suma +=1;
    }

let rezlutat= suma+ day; 
return rezlutat

}

module.exports = dayOfYear;