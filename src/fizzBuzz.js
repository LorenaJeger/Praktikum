
function fizzBuzz(num){
    /*  if(num%3 ==0 && num% 5==0) return "FizzBuzz";
    if(num%3 == 0) return "Fizz";
    if(num%5 == 0) return "Buuzz"; */
    //puno je bolje ovako resactoring -> 
     let result = [];
    if(num%3 == 0) result.push("Fizz");
    if(num%5 == 0) result.push("Buzz");
    
    let value= result.join("");
    if(value== "") return undefined;
    
    return value;
    
    }
    module.exports= fizzBuzz;  
    