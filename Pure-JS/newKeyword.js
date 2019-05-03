function Person(saying, saying2) {
  this.saying = saying;
  this.saying2 = saying2;
}

Person.prototype.talk = function () {
  console.log(`You said ${this.saying} ${this.saying2}`);
}

function createNew(constructor) {
  var obj = {};
  // sets the prototype of the constructor function to newly created obj.
  Object.setPrototypeOf(obj, constructor.prototype);
  // converts an array like object into array
  var argArray = Array.prototype.slice.apply(arguments);
  // apply sliced arguments of array to obj
  constructor.apply(obj, argArray.slice(1));
  // Finally return the object
  return obj;
}

// const newWord = new Person('hey');
const newWord = createNew(Person, 'hey', 'bro');

console.log(newWord.talk())
