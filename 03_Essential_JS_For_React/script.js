// console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));

// const api2 = fetch("https://jsonplaceholder.typicode.com/todos/1");

// api2;

// fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
//   res.json().then((data) => console.log(data))
// );


// Another Method

async function getTodos(){
  const res =await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
}

getTodos()