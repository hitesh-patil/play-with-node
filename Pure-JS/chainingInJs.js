const userdata = [
  { name: 'hitesh', email: 'htp437@gmail.com' },
  { name: 'Akshay', email: 'abp437@gmail.com' }
]

const userObj = function() {
  this.user;
  this.findUser = function(email) {
    this.user = userdata.find((item) => item.email === email);
    return  this
  };
  this.getUser = function() {
    return this.user.name;
  };
}


const userObject = {
  userName: '',
  findUser: function(email) {
    this.user = userdata.find((item) => item.email === email)
    return this
  },
  getUser: function() {
    return this.user.name;
  }
}

// console.log(new userObj().findUser("htp437@gmail.com").getUser())
console.log(userObject.findUser("htp437@gmail.com").getUser())