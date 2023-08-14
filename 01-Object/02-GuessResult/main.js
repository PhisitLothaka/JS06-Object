const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // * user = {  email: 'cc@gmail.com',  isActive: true  };
  user = {};
  console.log(user); // ** error ตั้งแต่บรรทัดที่ 8  เพราะว่า const ไม่สามารถเปลี่ยนค่าได้
  