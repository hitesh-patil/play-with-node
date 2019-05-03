async function fetchUserData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // response.json();
  // .then(res => res);
  return response;
}

console.log(fetchUserData())

// document.addEventListener("hello", function (event) {
//   console.log(event);
// });

// setTimeout(() => document.dispatchEvent(new CustomEvent("hello"), { detail: { name: 'hitesh' } }), 3000)
