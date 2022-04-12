const userName = document.querySelector('.user-input');
const usernameMessage = document.querySelector('.username-msg');
const password = document.querySelector('.pass-input');
const passwordMessage = document.querySelector('.password-msg');
const signIn = document.querySelector('.signin-button');
const signInStatus = document.querySelector('.signin-status');

signIn.addEventListener('click', signInValidation);

function signInValidation(event) {
    event.preventDefault();
    let usernameResult = true;
    let usernameValue = userName.value;
    console.log(usernameValue);
    usernameValue = usernameValue.trim()
    if (usernameValue === '') {
        usernameMessage.innerText = "Please enter a username";
        usernameResult = false;
    } else if (usernameValue.indexOf('@') === -1 || usernameValue.indexOf('.') === -1) {
        usernameMessage.innerText = "Username is not in valid form";
        usernameResult = false;
    }
    
    let passwordResult = true;
    let passwordValue = password.value;
    console.log(passwordValue);
    passwordValue = passwordValue.trim();
    if (passwordValue === '') {
        passwordMessage.innerText = "Please enter a password";
        passwordResult = false;
    } else if (passwordValue.length <= 4) {
        passwordMessage.innerText = "Password is too short";
        passwordResult = false;
    }    
    
    let ifSendData = usernameResult && passwordResult;
    if (ifSendData) {
        usernameMessage.innerText = "";
        passwordMessage.innerText = "";
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        });
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        }).then(response => {
            if (response.ok) {
                signInStatus.innerText = 'Signed In Successfully';
            }
        });        
    }
}