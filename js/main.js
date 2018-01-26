//alerts are annoying, lets use console.log
console.log('Welcome');
/*
This will now log to your console
*/

//create a function that updates a DOM element
function change(){
  // function body. Where it all goes down
  document.getElementById('foo').innerHTML = 'Welcome'
}

//Basic data types in Javascript
var name = 'Lucille'; // Store a string in a Javascript
var numberOfWidgets = 10; // number
var isCodingCool = true; // boolean
console.log(name); //log the value of a var to the console

//store an array in a var
var characters = [50, true, 'Lucille', 'Michael Bluth', 'Tobias', 10, 2];
console.log(characters[0]);

var name = "dog"
console.log(name);

var numberOfCats = 40;
console.log(numberOfCats);

var iAmAlive = true;
console.log(iAmAlive);

var drinks = ['beer', 'wine', 'whiskey']
console.log(drinks[2]);

// Multi-dimensional array
var meat = ['ham', 'bologna', 'turkey'];
var fruit = ['oranges', 'apples', 'grapes'];
var food = [meat, fruit];
console.log(food[1][0]); //logs 'oranges' to the console

// var food = [['ham', 'bologna', 'turkey'], ['oranges']]; could also be written like this

// Object
var user = {
  firstName: 'Lucille',
  age: 40,
  lastName: 'Bluth',
  hasHair: true,
  'has-feet': true
};
// access properties of our user obj using dot notation
console.log(user.firstName); //log 'Lucille'
// We can also access properties on objs using bracket notation
console.log(user['firstName']); //log 'Lucille'
console.log(user['has-feet']);

var person = 50
var horse = 15
console.log(person + horse);

var car = 'Cadillac'
var wheels = 'Firestone'
alert(car+ ' ' + wheels);

var myself = {
 firstName: 'Michael',
 lastName: 'Mensinger',
 fingerCount: 10,
 interests: ['music', 'guacamole', 'guitars']
};

console.log(myself.firstName);
console.log(myself.lastName);
console.log(myself.fingerCount);
console.log(myself.interests);
