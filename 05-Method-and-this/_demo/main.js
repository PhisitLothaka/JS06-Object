const log = console.log;
log('learn Method And This keyword');


// #########################################
// ############# 1. Method #################
// #########################################
// // each record => called property
// // each property => <key>:<value>

// // some record => <key>:<FN>

// const programmer = {
//     name:'pavit',
//     age: 30,
//     dev: devWebsite,//เรียกว่า Method
//     meet: meeting,
//     eat: eat,
// };

// function devWebsite(){
//     log("I'm working");
// }
// function meeting(){
//     log("I'm meeting");
// }
// function eat(){
//     log(" eating.....");
// }

// log(programmer.name);
// log (programmer.age);

// // Programmer.dev // devWebsite
// // Suntax : <obj>.<method>()
// programmer.dev();
// programmer.meet();
// programmer.eat();
// // เพิ่ม method ให้ programmer 1 อย่าง และลองเรียกใช้งาน

// -------------------------------------------------------------

// #########################################
// ####### 2. Alternative Syntax ###########
// #########################################

// const programmer = {
//     name: 'John',
//     age: 30,
//     dev: function() {
//         console.log("I'm working");
//     },
//     meet: () => console.log("I'm meeting"),
//     // method shorthand
//     sleep() {
//         console.log("I'm sleeping")
//     },
//     // sleep : () => console.log("I'm sleeping")
// }

//  programmer.dev();
//  programmer.meet();
//  programmer.sleep();

// //  Mini-lab
// // สร้าง object ของตัวเอง
// // ระบุคุณสมบัติของตัวเองสัก 2-3 ข้อ
// // ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)

// const me = {
//     name : 'phisit',
//     eye: "brown",
//     gender: 'male',
//     football : function playFootball() {
//         console.log("I'm playing football")
//     },
//     eatAllNight : (menu) => console.log(`I'm eating ${menu} all the time`),
//     focus (task) {
//         console.log(`I'm working on ${task} in Focus mode`);
//     },
    
// };

// me.football()
// me.eatAllNight("TAX");
// me.focus('Javascript lab')

// // OOP : Object Oriented Program

// const car = {
//     brand : 'Tesla',
//     speed : 80,
//     model : 'x',
//     drive : () => console.log('Driving'),
//     'auto pilot': () => console.log('Self driving'),
// };

// log(car.brand, car.model);

// // caller.Method
// car.drive();
// car['auto pilot']();

// const calculator ={
//     sum: (x,y) => x + y,
//     minus: (x,y) => x - y,
// };

// let r1= calculator.sum(5,7);
// let r2 = calculator.minus(7,3);
// log(r1,r2);

// log(car.speed);
// car.speed = calculator.sum(car.speed,20);
// log(car.speed);


// #########################################
// ########### 4. This keyword #############
// #########################################

// js keyword : if,else, for, while, do, switch, this
// Question : ทำอย่างไร method จะสามารถเข้าถึง property ของตัวเองได้

// const user = {
//     name : "codecamp",
//     age: 15,
//     asyHi: function () {
//         console.log(`Hello ${this.name}`);// this == user , this.name === user.age
//     },
//     growOld: function() {
//         this.age++;
//     },
// };
// // this == Dynamics Caller,Dynamics Context
// function dev () {
//     console.log(`this feature developed by ${this.name}`);
// }

// const programmer1 = {
//     name: "John",
//     develop: dev,
// };

// const programmer2 = {
//     name: 'Jane',
//     develop: dev,
// }
// // A : this ถูก solve ตอนเรียกใช้ Method
// //  Caller.method => this == Caller == Object before the dot

// //Checkpoint-1 : this == object ที่เรียกใช้ method 
// programmer1.develop();
// programmer2.develop();


// #########################################
// #### 5. Execution Context == Caller #####
// #########################################

// Global(Browser) : window object

// window.alert("I'm Global");
// this.alert("I'm Global this");
// alert("I'm execute in window");

// 
function sayHi(){
    console.log(this); //window
}
var a = 'm';

// Execute Context = window
window.sayHi();
this.sayHi();
sayHi();

// Function Context
var name = "Codecamp"
function sayHello(){
    console.log(this.name);
}

// Window Caller
sayHello();
window.sayHello()

const user = {
    name: "ten",
    say: sayHello,
    scream:() => {
        console.log(`scream by ${this.name}`);
    },
    srcm: function() {
        console.log(`scream by ${this.name}`);
    },
};
// user caller
user.say();
// this == caller

// Arrow ไม่มีความสามารถในการสร้าง Context
// Loose Context => Chain to window
user.scream(); // don't use this keyword with arrow function
user.srcm();