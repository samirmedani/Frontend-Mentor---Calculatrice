var input = " ";


function ShowValue(btn) {
    
    input = input + btn.value;

    document.getElementById("result").innerHTML = input

}

function quickMath() {
    document.getElementById("result").innerHTML = eval(input)
}

function Reset() {
    
    document.getElementById("result").innerHTML = "0"
    input = ""

}