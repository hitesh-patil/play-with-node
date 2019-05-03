console.log(varEle);
var varEle = 1;

// variable varEle will be hoisted first.

console.log(letEle());
function letEle() {
  console.log("hey there")
}

// variable letEle will not bet hoisted first.