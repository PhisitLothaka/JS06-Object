const log = console.log;
log('Object Clone');

let todo = {
    task:'Do Hw',
    conplete : false,
    due_date:'13-08-2023',
};

// const newTodo = todo;
// newTodo.complete = true;


// clone
// const newTodo = {};
    // 1. เอาต้นแบบมา loop แล้ว assign ที่ละ key:value ให้ object ใหม่

    // for(let key in todo){
    //     newTodo[key] = todo[key];
    // }
    // log(newTodo);
    // newTodo.conplete=true;
    // log(newTodo.conplete);
    // log(todo.conplete);
    // log(todo);
    // log(newTodo);

// 2. object.assign
// const newTodo = {
//     conplete : true,
// }
// log(newTodo);

//MERGE/OVERRIDE Direction : RIGHT -> LEFT 
// ในกรณีที่มี key ซ้ำกัน มันจะเอาตัวขวาทับซ้าย
// Object.assign(newTodo,todo);
// log(todo);
// log(newTodo);

// 2A
// const newTodo = {};
// Object.assign({},todo);
// log(newTodo)

// 2B
// const newTodo = Object.assign({}, todo);
// log(newTodo);
