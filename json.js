document.getElementById('button1').addEventListener('click', loadCustomer);

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