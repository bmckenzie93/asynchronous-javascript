# asynchronous-javascript
In this repo I will be learning about AJAX an Fetch API

# 2-9-2020 (3:00pm) {
  I just added my files and broilerplate to do some exercises with AJAX calls.

  I made a button, and on click, it will run a function that will create a new XMLHttpRequest. Then with .open I pass in 3 peramiters, 1st is the type of request I am making - in this case GET, 2nd is the file name I am fetching from, then third is a boolean for asynchronous or not.
  After that I use .onLoad to do what I want with the data that I recieve, in this case I output it into the DOM and have it go away after 2 seconds just for fun. Next I will work with a JSON file.

  When working with a JSON file the procedure was basically the same except I had to parse the response into an object before being able to use it how I wanted to( display it in the dom). 

  When working with an array of json objects I needed to parse the json string into objects then iterate through each of them with a forEach method before displaying all of them to the dom. I'm getting the hang of this stuff!!! Next up: Chuck Norris Joke API

  DONE. Next: callback exercise
} 

# 2-10-2020 (6:45pm) {
  I am going to make a new js file with the same information as callback.js but I will edit it to use promices instead.

  This was not much differant but a little simpler syntax. Fetch api will return a promice and it is a newer way of handleing asynchronous code, which I will be studying next - so good to know.
}
# 2-11-2020 (7:30pm) {
  I am working on retrieveing data from a text file, json file, and restful api, using the fetch api today.

  The fetch API is pretty easy to fetch data with. Next up is to learn about arrow functions -which have a lexical this- to slim down a lot of my code.

  I am now going to revise this code (fetch api sandbox) to use arrow functions instead of regular functions.
}

# 2-12-2020 (10:00pm) {
  I am going to study async await in these async files I just added. Together used with fetch it cleans up and compacts the code a good amount, and I looked it up, and it works on pretty much all browswes now.
}

# 2-21-2020 (9:30am) {
  I am back to working on async await today, I have a good amount of time to dedicate to learning. I want to understand how to use async away with the fetch api to make http requests in a modern and elegant way.

  Use async on a function that will fetch data. await and store the fetch responsein a variable , then await and store the response.json in a variable, then return the data. after that call the function .then do what you wish with the data.
}