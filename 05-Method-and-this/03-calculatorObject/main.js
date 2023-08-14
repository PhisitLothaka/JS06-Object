// - ให้สร้าง Object calculator ซึ่งมี 3 method 
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

const calculator = {
    x: null,
    y: null,
    read() {
        this.x = +prompt("Enter num1");
        this.y = +prompt("Enter num2"); 
        
    },
    sum(){
        let result = this.x + this.y
        return console.log(result);
    },
    mul(){
        let result = this.x * this.y;
        return console.log(result);
    },
};
