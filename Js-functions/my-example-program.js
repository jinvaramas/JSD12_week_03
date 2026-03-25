import readline from "readline";

// 1 inch = 2.54 cm

function inchToCm(inch) {
  return inch * 2.54; //แปลงค่าจากนิ้วเป็นเซนติเมตร โดยนำค่านิ้วคูณด้วย 2.54
}

function cmToInch(cm) {
  return cm / 2.54; //แปลงค่าจากเซนติเมตรเป็นนิ้ว โดยนำค่าเซนติเมตรหารด้วย 2.54
}

const rl = readline.createInterface({
  input: process.stdin, //ใช้รับข้อมูลจากผู้ใช้
  output: process.stdout, //ใช้แสดงผลในคอนโซล
});

rl.question("Enter your value:", function (valueInput) {
  const value = parseFloat(valueInput); //แปลงค่าที่รับมาเป็นตัวเลขทศนิยม

  rl.question("Enter unit (IN or CM):", function (unitInput) {
    const unit = unitInput.trim().toUpperCase(); //ลบช่องว่างและแปลงเป็นตัวพิมพ์ใหญ่

    let result; //เก็บผลลัพธ์

    if (unit === "IN") { //ถ้าเป็นนิ้ว
      result = inchToCm(value);
      console.log(`${value} inch is ${result.toFixed(2)} cm`);
    } else if (unit === "CM") { //ถ้าเป็นเซนติเมตร
      result = cmToInch(value);
      console.log(`${value} cm is ${result.toFixed(2)} inch`);
    } else {
      console.log(`Invalid unit! Please enter IN or CM.`);
    }

    rl.close(); //ปิดโปรแกรม
  });
});
