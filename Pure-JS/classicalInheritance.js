class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`User ${this.username} has logged in`);
  }
}


class Admin extends User {
  constructor(username, email, name) {
    super(username, email);
    this.name = name;
  }

  login() {
    super.login();
    console.log(`admin name: ${this.name}`);
  }
}


// var outerVar = 3;

// var addFunc = function () {
//   var innerVar = 2;
//   return function() {
//     return innerVar + outerVar;
//   }
// }

// const returnVal = addFunc();

// console.log(returnVal())
// console.log(returnVal())

const userInst = new User('Hitesh', 'htp437@gmail.com');

const admInst = new Admin('superAdmin', 'admin123@123')

// // console.log(userInst.login())
console.log(admInst.login())