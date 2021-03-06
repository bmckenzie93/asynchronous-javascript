const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
  {title: 'Post Three', body: 'This is post three'},
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
    posts.push(post);

    const error = false;
    if(!error) {
      resolve();
    } else {
      reject('Error: Something went wrong..')
    }
  }, 2000);
  });
  
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}<br><br>>${post.body}<br><br></li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Four', body: 'This is post four'})
.then(getPosts)
.catch(function(error) {
  console.log(error);
});

getPosts();