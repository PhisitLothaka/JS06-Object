const log = console.log;

log('Constructor Function');

const dev1 = {
    name : 'John',
    age : 32 ,
    role : 'dev',
    salary : 40_000,
    dev : function (){
        console.log(`${this.name} develop some features`);
    },
};


// Object Creators == Constructor Function

function Developer(name,age) {
    // Impolicit create this = {}
    this.name = name;
    this.age = age;
    this.role = 'dev';
    this.salary = 40_000;
    this.dev = function (){
        console.log(`${this.name} develop some features`);
    }
    // Implicit Return this
    // return {name......, dev : fn()}
};

// this == dev2
// [3] this === Instance
const dev2 = new Developer("phisit",25);
log(dev2);

const dev3 = new Developer('Jane', 50);
log(dev3);
dev2.dev();