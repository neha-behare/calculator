function insertValue(value) {
    document.getElementById("id1").value += value;
}

function myInput1() { insertValue("1"); }
function myInput2() { insertValue("2"); }
function myInput3() { insertValue("3"); }
function myInput4() { insertValue("4"); }
function myInput5() { insertValue("5"); }
function myInput6() { insertValue("6"); }
function myInput7() { insertValue("7"); }
function myInput8() { insertValue("8"); }
function myInput9() { insertValue("9"); }
function myInput0() { insertValue("0"); }
function myInputDec() { insertValue("."); }

function myInputAdd() { insertValue("+"); }
function myInputSub() { insertValue("-"); }
function myInputMult() { insertValue("*"); }  
function myInputDiv() { insertValue("/"); }

function myInputMod() { insertValue("%"); }     
function myInputSqrt() {                        
    let value = document.getElementById("id1").value;
    if (value) {
        document.getElementById("id1").value = Math.sqrt(parseFloat(value));
    }
}
function myInputPower() { insertValue("**"); }  
function myInputNeg() {                         
    let value = document.getElementById("id1").value;
    if (value) {
        document.getElementById("id1").value = -parseFloat(value);
    }
}

function clearAll() {
    document.getElementById("id1").value = "";
    document.getElementById("output").innerText = "";
}
function delBack() {
    let value = document.getElementById("id1").value;
    document.getElementById("id1").value = value.slice(0, -1);
}

function calAnswer() {
    let expression = document.getElementById("id1").value;
    try {
        document.getElementById("output").innerText = eval(expression);
    } catch (e) {
        document.getElementById("output").innerText = "Error";
    }
}

function onFunction() {
    document.getElementById("id1").disabled = false;
}
function printName() {
    document.getElementById("id1").disabled = true;
}
