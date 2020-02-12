document.getElementById('getText').addEventListener('click', getText);

function getText() {
  fetch('test.txt')
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      console.log(data);
    });
}