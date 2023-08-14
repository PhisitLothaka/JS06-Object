console.log("laern loop");

const user = {
    firstName:'codecamp',
    lastName: 'Software park',
    age: 15,
};

// For IN : Loop through Objeact
// for (let <key_variable> in <obj>) {}
for (let key in user ){
    console.log(`Key : ${key}`); // auto dynamics assign by JS in <string>
    //1st : let key = "firstName"
    //2nd : let key = "lastName"
    //3rd : let key = "age"


    console.log(`Val : ${user[key]}`); // need to access by bracket , conputed key
    //1st : user[key] == user ['firstName'] ==> Codecamp
    //2nd : user[key] == user ['lastName'] ==> Software park
    //3rd : user[key] == user ['age'] ==> 15
    
    console.log(user.key);
    //1st : user.key == user['key'] ==> undefined
    //2nd : user.key == user['key'] ==> undefined
    //3rd : user.key == user['key'] ==> undefined
    
}





// 'firstName' in user; //true
// 'age' in user; //true
// 'phone' in user; //false