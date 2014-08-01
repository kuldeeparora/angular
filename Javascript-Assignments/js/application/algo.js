
// the while loop
var number = 1;
var sum = 0;
while (number < 11) {
    sum += number;
    ++number;
}

console.log(sum); // displays 55


//“Summing integers using a for loop”

var number = 1;
var sum = 0;
for (var number = 1; number < 11; number++) {
    sum += number;
}
console.log(sum); // displays 55


//Using a for loop with an array
var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}
console.log(sum);

function factorial(number){
    var product = 1;
    for(var i = number; i >= 1; --i ){
        console.log(" p " + product);
        product *= i;
        console.log(" p " + product);
    }
    return product;
}

console.log(factorial(4));



