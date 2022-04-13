let input = "";
let specialChara = ['+', '-', '/', '%', '*', "."]

function ShowValue(btn) {
 
    console.log(btn.value)
 
    if(specialChara.includes(btn.value) && specialChara.includes(input.slice(-1))) {
        return;
    }
    input = input += btn.value;
    document.getElementById("result").innerHTML = input 
}


function quickMath() {

    document.getElementById("result").innerHTML = eval(input)
    input = ""
}

function Reset() {
    
    document.getElementById("result").innerHTML = "0"
    input = ""

}

function rem1(btn){
    console.log(input)
    input = input.slice(0, input.length - 1)
    console.log(input);

    if(input == "") {
        input = "0"
    } 
        

    document.getElementById("result").innerHTML = input;
    input = ""
   


}
    