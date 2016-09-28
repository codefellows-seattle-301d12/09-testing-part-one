/* Welcome to an intro to testing! This practice module
    will allow you to become familiar with testing concepts.
    We test to check the I/O of our apps. That is - we are not
    checking for HOW something works, but the end RESULT and
    state of a particular place in our application.
*/


/* Below is a basic example of a test "framework" where
    our test is a function that we can reuse to check against
    different components of our application.
    We test for failing functionality first to then refactor
    the test to pass.

    This is common practice in testing ('red-green' refactoring).
*/

function assert(expression, successMessage, failureMessage) {
  var currentTest = assert.caller.name;
  if (expression) {
    return console.log('\n' + currentTest +
      ' test passing:', successMessage);
  }
  console.log('\n' + currentTest +
    ' test failing:', failureMessage);
}

//  Below, we will write an example of our test in action:

var ricksFaveAnimal;
var ricksFaveAnimal = 'laksjdflajsdf';

exampleTest = function() {
  assert(typeof ricksFaveAnimal==='string', 'is string', 'is not string');
};


/* ========================================================================
------------------------- Favorite Animals --------------------------------
===========================================================================
The zoo is closing in 20 minutes. You still haven't seen your four favorite
animals. You only have time for one. How do you choose just one?!
*/

var favoriteAnimals = ['elephants', 'penguins', 'eagles', 'camels'];
var nextAnimal;


/* DONE:
Write a test FIRST! Use the `assert()` function below to ensure
that an element in the favoriteAnimals array was assigned to nextAnimal.

No hard-coded results allowed! (e.g. -  seeing if nextAnimal is equal to
just 'penguin').
Remember to: pass in your expression, and write a success and a failure
message. */

faveAnimalTest = function() {
  assert(favoriteAnimals.includes(nextAnimal),nextAnimal+' is one of favorite animals',nextAnimal+' is not one of favorite animals');
};

/* DONE:
Now assign one of your favorite animals dynamically, by chance, to the
nextAnimal variable ... then invoke your test!   :-)
Your code begins on the next line: */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

nextAnimal = favoriteAnimals[getRandomInt(0,(favoriteAnimals.length))];

faveAnimalTest();
