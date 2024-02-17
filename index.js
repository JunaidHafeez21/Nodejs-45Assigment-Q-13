"use strict";
// Q13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let vehicles = ["Suzuki 150", "Civic ", "BMW", "V8"];
vehicles.map((items) => console.log(`I would like to own a ${items}`));
console.log("I would like to own a" + " " + vehicles[0]);
