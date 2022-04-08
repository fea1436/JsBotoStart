const xhr = new XMLHttpRequest();
xhr.open("Get", "https://jsonplaceholder.ir/users");

xhr.onload = () => {
    const data = xhr.response;
    console.log(xhr.status);
    console.log(JSON.parse(data));
};

xhr.send();