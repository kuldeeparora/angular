/**
 * Created by kuldeeparora on 20/02/15.
 */

// Circle constructor
function Circle(x, y, r){
  function r_squared(){
      return Math.pow(r, 2);
  }

    function area(){
        return Math.PI * r_squared();
    }

    return {
        area: area
    };
}

module.exports = Circle;

function printA() {
    console.log('A');
}
function printB() {
    return "B";
}
function printC() {
    console.log('C');
}
module.exports.printA = printA;
module.exports.printB = function(){
    console.log('Print ' + printB());
}
module.exports.pi = Math.PI;
