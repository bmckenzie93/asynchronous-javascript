async function getUsers() {
  const rez = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await rez.json();
  return data;
}

getUsers().then(users => console.log(users))
