const parentFunc = (function() {
  let increment = 0;
  return function() {
    return increment++;
  }
})()

console.dir(parentFunc)
console.log(parentFunc())
console.log(parentFunc())

var func = function() {
  var increment = 10;
  return {
    addValue: function(value) {
      return increment += value;
    }
  }
}

var funcReturn = func();

console.log(funcReturn.addValue(10))

