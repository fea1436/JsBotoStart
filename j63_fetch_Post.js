// To POST a data
//    1: Create data
const data = JSON.stringify({
    title: 'Kamran',
    body: 'bar',
    userId: 1,
});
  
//    2: Create Header
const header = {
    'Content-type': 'application/json; charset=UTF-8',
};


//    3: Post DATA to Server
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: data,
  headers: header,
})
  .then((response) => response.json())
  .then((json) => console.log(json));