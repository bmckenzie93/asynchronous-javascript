document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest;

  // OPEN
  xhr.open('GET', 'text.txt', true);
  // Check state
  console.log(xhr.readyState);

  // Optional - used for spinners / loaders
  xhr.onprogress = function() {
  
  }

  xhr.onload = function() {
    if(this.status === 200) {
      const div = document.createElement('div');
      div.innerHTML = `<h1>${this.responseText}</h1>`;
      document.querySelector('.container').appendChild(div);
      setTimeout(function() {
        document.querySelector('.container').lastElementChild.remove();
      }, 2000);
    }
  } 

  xhr.onerror = function() {
    console.log('Request Error...')
  }

  xhr.send();
}