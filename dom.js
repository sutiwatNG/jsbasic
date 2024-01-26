const menu = document.getElementById('menu')
const item = document.getElementById('item-2')
const itemB = document.getElementById('item-3')//อ่านค่า element ที่เราอ้างอิงจากhtml

const newItem = document.createElement("li")//สร้าง element
newItem.innerText = "x"

menu.replaceChild(newItem,itemB)
function deleteItem() {
    menu.removeChild(item)//ลบ node
}