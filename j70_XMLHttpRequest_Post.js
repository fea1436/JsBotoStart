const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

const giveSinglePostData = {
    title: "Test Title",
    body: "Test Body",
    userId: 1
};
xhr.setRequestHeader("Content-Type", "Application/json");

xhr.onload = () => {
    const data = xhr.response;
    console.log(xhr.status);
    console.log(JSON.parse(data));
};

xhr.send(JSON.stringify(giveSinglePostData));