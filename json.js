document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  // Create XMLHttpRequest Object
  const xhr = new XMLHttpRequest;

  // OPEN
  xhr.open('GET', 'customer.json', true);

  // Use Data
  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      document.getElementById('customer').innerHTML += 
        `
          <ul>
            <h3>Customer</h3>
            <li> ID: ${response.id}</li>
            <li> NAME: ${response.name}</li>
            <li> AGE: ${response.age}</li>
          </ul>
        `;
    }
  }

  // Incase Error
  xhr.onerror = function() {
    console.log('Request Error...');
  }

  // SEND
  xhr.send();
}



function loadCustomers(e) {
  // Create XMLHttpRequest Object
  const xhr = new XMLHttpRequest;

  // OPEN
  xhr.open('GET', 'customers.json', true);

  // Use Data
  xhr.onload = function() {
    if(this.status === 200) {
      let i = 1;
      const response = JSON.parse(this.responseText);
      response.forEach(function(customer) {
        document.getElementById('customers').innerHTML +=
          `
            <ul>
              <h3>Customer ${i}</h3>
              <li> ID: ${customer.id}</li>
              <li> NAME: ${customer.name}</li>
              <li> AGE: ${customer.age}</li>
            </ul>
          `;
        i++;
      })
    }
  }

  // Incase Error
  xhr.onerror = function() {
    console.log('Request Error...');
  }

  // SEND
  xhr.send();
}