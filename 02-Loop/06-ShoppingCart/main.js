// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// Sub Program-1 : Input
let log = console.log;
let name = prompt("Enter Product Name");
let quantity = +prompt("Enter Quantity");
let price = +prompt("Enter Price");
let discount = +prompt("Enter discount");



// Sub program-2 : CreateObject


// const products = {
//     name: name,
//     quantity: quantity,
//     price:price,
//     discount: discount,
// };
// **** เมื่อชื่อ าำั ตรงกับชื่อตัวแปรที่เก็บ value *** สามารถ Suntax (Property shorthand)

const products ={name,quantity,price,discount}
// log(products);


// Sub Program-3 : Calcutelate Price
// discount 10%, paid 90%
// discount 0.1, paid 0.9
// price, quantity,discount => TotalPrice
// function calcPrice(price,quantity,discount = 0){
//     let totalPrice = price * quantity * (1-discount);

//     return totalPrice;
// }

// let result = calcPrice(products.price,products.quantity,products.discount);
// log(result);

function calcPrice(products){
let price = products.price;
let quantity = products.quantity;
let discount = products.discount;
return price * quantity * (1-discount);
}

