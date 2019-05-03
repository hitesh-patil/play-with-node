var user = [
  { name: "akshay", email: "abp437@gmail.com" },
  { name: "hitesh", email: "stp534@gmail.com" },
  { name: "hitesh", email: "htp437@gmail.com" },
  { name: "shailesh", email: "spp437@gmail.com" }
]

var filterUser = user.filter(function (item) {
  return item.name == "hitesh";
});

console.log(filterUser)

const filterMe = function (func) {
  const returnArr = [];
  for (let i = 0; i < user.length; i++) {
    if (func(user[i])) {
      returnArr.concat(user[i])
    }
  }
}

console.log("return value ", filterMe(function (item) {
  return item.name === "hitesh"
}))