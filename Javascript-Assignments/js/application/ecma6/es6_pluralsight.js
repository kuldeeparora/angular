/**
 * OOPS in JS ES6
 */

class Drone {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

let drone1 = new Drone(11, 'test');
let drone2 = new Drone(12, 'test1');

console.log(drone1.id + ' ' + drone2.name);