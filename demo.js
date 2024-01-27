// let round = prompt("เล่นกี่รอบ ?")
// sum = 0
// for (let i = 0; i < round; i++) {
//     let answer = prompt("หัว หรือ ก้อย ")
//     let random_answer = ""
//     if (Math.floor(Math.random() *10) <=4) {
//         random_answer = "หัว"
//         document.getElementById("random-answer").innerHTML +=random_answer +  " , "
//         document.getElementById("your-answer").innerHTML +=answer +" , "
//     }else{
//         random_answer = "ก้อย"
//         document.getElementById("random-answer").innerHTML +=random_answer +  " , "
//         document.getElementById("your-answer").innerHTML +=answer +" , "
//     }
//     if (answer == random_answer) {
//         alert("ยินดีด้วยตอบถูก")
//         sum+=1
//     }else{
//         alert("เสียใจด้วยตอบผิด")
//     }
//     document.getElementById("sum").innerHTML = sum
// }

function toCelsius(fahrenheit) {
    let value = (fahrenheit - 32) * 5 / 9
    return "องศา "+ value.toFixed(2) + " C";
}

function toFahrenheit(celsius) {
    let value = (celsius * 9 / 5) + 32
    return "องศา "+ value.toFixed(2) + " F";
}
function display(elementId, value) {
    document.getElementById(elementId).innerHTML = value
}
function toCelsiusProgram(value) {
    display("answer_sectionC",toCelsius(value))
}

function toFahrenheitProgram(value) {
    display("answer_sectionF",toFahrenheit(value))
}
