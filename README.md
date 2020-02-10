# asynchronous-javascript
In this repo I will be learning about AJAX an Fetch API

# 2-9-2020 (3:00pm) {
  I just added my files and broilerplate to do some exercises with AJAX calls.

  I made a button, and on click, it will run a function that will create a new XMLHttpRequest. Then with .open I pass in 3 peramiters, 1st is the type of request I am making - in this case GET, 2nd is the file name I am fetching from, then third is a boolean for asynchronous or not.
  After that I use .onLoad to do what I want with the data that I recieve, in this case I output it into the DOM and have it go away after 2 seconds just for fun. Next I will work with a JSON file.

  When working with a JSON file the procedure was basically the same except I had to parse the response into an object before being able to use it how I wanted to( display it in the dom). 

  When working with an array of json objects I needed to parse the json string into objects then iterate through each of them with a forEach method before displaying all of them to the dom. I'm getting the hang of this stuff!!!!
} 