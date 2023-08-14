// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

const calculate = {
    x : null,
    y : null,
    read() {
        this.x = +prompt("Enter Number : ");
        this.y = +prompt("Enter Number : ");
    },
    sum(){
      return  this.x + this.y ;
    },
    mul(){
        return this.x * this.y;
    }
};

calculate.read();
console.log(calculate);