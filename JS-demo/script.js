var database = [
    {
        username: "Bob",
        password: "123",
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "OKOKOKOK",
    },
    {
        username: "Sally",
        timeline: "javascript",
    },
];

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("you are wrong!");
    }
}

signIn(userNamePrompt, passwordPrompt);
