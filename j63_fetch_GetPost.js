// if you dont say any method in FETCH, 
// by default you method set to GET

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => console.log(json));