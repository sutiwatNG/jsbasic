 //สร้างตัวแปร
let name = "golf"//กำหนดค่าตัวแปร

//เช็ค debug ค่าต่าง ๆ แต่จะไม่แสดงผลในหน้าเว็บ
console.log("aaaa")
//--------

//แสดงข้อความ ตัวเลข ตัวแปร หรือแท็ก HTML ในหน้าเว็บ
document.write(name)
//--------

//แจ้งเตือนผู้ใช้
alert("ระวังนะ")
//--------

//คัวแปร array
let age = Array(15,17,16,13,12)

document.write("<p>",age,"</p>")
document.write("<p>",age[2],"</p>")
console.log(age)
//--------

//ตัวดำเนินการทางคณิต
console.log("ผลบวก =",20+10)
console.log("ผลลบ =",20-10)
console.log("ผลคูณ =",20*10)
console.log("ผลหาร =",20/10)
console.log("ผลเศษ =",20%3)

//คำนวณเลขคู่ / เลขคี่
let x= 12

if (x%2 == 0) {
    console.log("เลขคู่")
}else{
    console.log("้เลขคี่")
}



