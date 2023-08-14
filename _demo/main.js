console.log('learn object');

// FataType
// - Primitive : Boolean,Number,string etc...
// - Non-primitive : Object

// ######################
// ### Object Declaration
// ######################
// {} == srand for Object / Scope
// { record_1, record_2, record_3,...}
// rach record => <key_name>:<value>
// <value> any Datatype
// <key_name> Datatype : string
// record === property (คุณสมบัติ,สิ่งที่มี) == key-value pair


// let user = {
//     firstName : "Phisit",
//     lastName : 'Lothka',
//     age : "25",
//     isAdmin : true,
// };


// ##########################
// ### ACCESS, MODIFY, DELETE
// ##########################

// Every action NEED <KEY_NAME> !!
// Dot Notation <Obj>.<key_name>
// ถ้าไม่มี record => return undefined
// ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

// GET,POLL,READ
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isAdmin);

// MODIFY,UPDATE
// Syntax : <obj>.<key_name> = newValue
// user.firstName = 'Pracit';
// user.age = 32;
// user.age += 2;
// user.age++;

// ADD
// Syntax : <obj>.<new_key> = newValue
// user.address = "bangkok";
// console.log(user);

// DELETE
// Syntax : delete <obj>.<key_name>
// delete user.isAdmin;
// console.log(user);


// ##########################
// ### NESTED Object
// ##########################

// const employee ={
//     fullName: 'John Doe',
//     salary: 500_000,
//     address : {
//         district: 'Phaya Thai',
//         province: 'Bangkok',
//         country : 'Thailand',
//     },
// };

// ACCESS,MODIFY, DELETE
// console.log(employee.fullName);
// console.log(employee.address);
// console.log(employee.address.province);
// console.log(employee.address.district);
// console.log(employee.address.village);

// employee.address.province = "Nonthaburian";
// delete employee.address.country;

// Dot ใช้กับ Object เท่านั้น
// ห้ามมมมมมมมมม ใช้กับ undefined <undefined>.<key>
// วิธี optional chaining => <undefined>?.<key>


// console.log(employee.addr);
// console.log(employee.addr.province); // undefined.province
// console.log(employee.addr?.province);
// console.log(employee.address?.province);
// console.log(employee.address?.village);

// ##########################
// ############ 4. Check key?
// ##########################

// const product = {
//     id: 227,
//     name: "Iphone",
//     price: 50_000,
    // discount : 0.05,
// };

// console.log(product.discount);


// IN Operator
// Syntax : <key_name_strung> in <obj> => Boolean
// console.log("name" in product);
// console.log("discount" in product);

// method hasOwnProperty
// Syntax : <obj>.hasOwnProperty(<key_name>) => Boolean
// console.log(product.hasOwnProperty('name'));
// console.log(product.hasOwnProperty('discount'));


// ##########################
// ### 5. Bracket Notation []
// ##########################

// Syntax : <obj>["<key_name_string>"]

// console.log(product.id);
// console.log(product['id']);

// console.log(product.is mobile) crash
// console.log(product['is mobile']);

// product['name'] = 'Iphone-15';
// console.log(product);

// let aaaaaaa = 'name';

// console.log(product['name']);
// console.log(product[aaaaaaa]);
// console.log(product.aaaaaaa);// product.aaaaaa ==== product['aaaaaaaa']


// ### ทบทวนอีกครั้ง
let log = console.log;
const user = {
    name: "John",
    age: 33,
    isMarried: false,
    address: {
        cillage: "Laddaland",
        procince: "Chiang Mai",
    },
};

// GET DATA
log(user.name);
log(user['name']);

let a = 'name';
log(user.a); // วิ่งไปหา key a => undefined
log(user[a]); // user['name'] => John
//Note : เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง access ผ่าน []

// DELETE

// delete user.isMarried;
log(user);
// delete user['age'];
log(user);

let b = 'address';
// delete user[b]
log(user)

// UPDATE
let x = 5;
x = x + 2;
// container = value + 2

user.age = user.age + 1;
user.age += 1 ;
log(user.age);
// container = value + 1

user['age'] = user['age'] + 5;
log(user.age);

user['age'] += 5 ;
log(user.age);

user['age']++
log(user.age);

// key variable
let key = 'age';

// Computed key
user[key] = user[key] + 5;
log(user.age);
// user['age'] = user['age'] + 5
log(user.age);

user[key] += 1;
user[key]++;
log(iser,key);
log(user.age);

// Ceitical Point
// -bracket notation ใช้กับคีย์เป็น string หรือ ตัวแปรที่เก็บ string
// -for(<key> in <obj>) JS จะ auto reassign key ใหม่


