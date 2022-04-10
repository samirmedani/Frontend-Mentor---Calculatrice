let input = "";
let specialChara = ['+', '-', '/', '%', '*', "."]
let CharaBack = ""

function ShowValue(btn) {
    
    console.log(btn.value)

    


    if(specialChara.includes(btn.value) && specialChara.includes(input.slice(-1))) {
        console.log(btn.value + "btn value")
        console.log(CharaBack + "CharaBack")

        CharaBack = input
        return;
    }

    input = input += btn.value;

    CharaBack = input

    document.getElementById("result").innerHTML = input
    
}






function quickMath() {
    document.getElementById("result").innerHTML = eval(input)
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
        input = "Résultat !"
    } 
        
    
    
    document.getElementById("result").innerHTML = input;
    input = ""
   


}
    