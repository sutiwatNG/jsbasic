let round = prompt("เล่นกี่รอบ ?")
sum = 0
for (let i = 0; i < round; i++) {
    let answer = prompt("หัว หรือ ก้อย ")
    let random_answer = ""
    if (Math.floor(Math.random() *10) <=4) {
        random_answer = "หัว"
        document.getElementById("random-answer").innerHTML +=random_answer +  " , "
        document.getElementById("your-answer").innerHTML +=answer +" , "
    }else{
        random_answer = "ก้อย"
        document.getElementById("random-answer").innerHTML +=random_answer +  " , "
        document.getElementById("your-answer").innerHTML +=answer +" , "
    }
    if (answer == random_answer) {
        alert("ยินดีด้วยตอบถูก")
        sum+=1
    }else{
        alert("เสียใจด้วยตอบผิด")
    }
    document.getElementById("sum").innerHTML = sum
}

