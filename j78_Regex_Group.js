const auth = "Bearer Authorization_token";
const regex = /Bearer (?<miladToken>[^ $]*)/;
const result = regex.exec(auth);
console.log(result);
console.log(result.groups.miladToken);