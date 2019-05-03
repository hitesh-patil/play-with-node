function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.getUsername = function() {
  return this.name;
}

const userInstance = new User('Hitesh', 'htp437@gmail.com');

function Admin(...args) {
  User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

const adminInstance = new Admin('superAdmin', 'superMe123@gmail.com');

console.log(userInstance)
console.log(adminInstance)
console.log(adminInstance.getUsername())