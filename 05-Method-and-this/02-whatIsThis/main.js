var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser(); //let เป็นของ window this เลยเปลี่ยน
console.log(user.ref.name); // * Joe เพราะว่า window เป็น caller