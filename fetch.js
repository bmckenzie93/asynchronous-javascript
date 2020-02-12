document.getElementById('getText').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      const p = document.createElement('p');
      p.textContent = data;
      document.getElementById('output').appendChild(p);
    })
    .catch(function(error) {
      console.log(error);
    });
}

document.getElementById('getJson').addEventListener('click', getJson);

function getJson() {
  fetch('customers.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.forEach(function(customer) {
        document.getElementById('output').innerHTML += `
          <ul><li><h1>${customer.id}</h1></li><li>${customer.name}</li><li>${customer.age}</li></ul>
        `
      })
    })
    .catch(function(error) {
      console.log(error);
    })
}


document.getElementById('getApi').addEventListener('click', getApi);

function getApi() {
  fetch('https://api.github.com/users')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.forEach(function(user) {
        document.getElementById('output').innerHTML += `
          <ul><li><h1>${user.login}</h1><</li></ul>
        `
      })
    })
    .catch(function(error) {
      console.log(error);
    })
}