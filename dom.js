const menu = document.getElementById('menu')
const item = document.getElementById('item-2')
const itemB = document.getElementById('item-3')

const newItem = document.createElement("li")
newItem.innerText = "x"

menu.replaceChild(newItem,itemB)
function deleteItem() {
    menu.removeChild(item)//ลบ node
}
