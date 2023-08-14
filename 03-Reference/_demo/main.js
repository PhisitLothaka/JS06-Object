console.log('learn Refereace');

const log = console.log;

// copied by value
// Copied by Reference

// primitive
let message = 'hello'

let word = message;

message = 'hi';
log(message);
log(word);

// OBJECT
let user = {
    name : 'John',
    age : 33,
};

// *** COPIED BY REFERENCE
