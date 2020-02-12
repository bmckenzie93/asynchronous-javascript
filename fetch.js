const getText = () => {
  fetch('test.txt')
    .then(response => response.text())
    .then(data => {
      const p = document.createElement('p');
      p.textContent = data;
      document.getElementById('output').appendChild(p);
    })
    .catch(error => console.log(error));
};

document.getElementById('getText').addEventListener('click', getText);


const getJson = () => {
  fetch('customers.json')
    .then(response => response.json())
    .then(data => data.forEach(customer => {
        document.getElementById('output').innerHTML += `
          <ul><li><h1>${customer.id}</h1></li><li>${customer.name}</li><li>${customer.age}</li></ul>
        `
      }))
    .catch(error => console.log(error));
}

document.getElementById('getJson').addEventListener('click', getJson);


const getApi = () => {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        document.getElementById('output').innerHTML += `
          <ul><li><h1>${user.login}</h1><</li></ul>
        `
      })
    })
    .catch(error => console.log(error))
};

document.getElementById('getApi').addEventListener('click', getApi);