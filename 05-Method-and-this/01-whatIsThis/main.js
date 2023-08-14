let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name);
    }
  };
  
  (user.sayHi)(); // *John เพราะว่า user เป็น caller ของ this