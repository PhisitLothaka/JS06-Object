let username = prompt('username : ');
let emil = prompt('Email : ');
let password = prompt('Password : ');

// Property shorthand
let user = {username, emil, password,};
/*
    {
        username : <value in username variable>,
        age : <value in age variable>,
    }
*/
console.log(user);
console.log(user.username);