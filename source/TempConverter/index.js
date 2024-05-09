
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        result.textContent = (temp * 9 / 5 + 32).toFixed(1) + "°F";
    }   
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        result.textContent = ((temp - 32) * (5/9)).toFixed(1) + "°C";
    } 
    else {
        result.textContent = "Select a unit";
    }
}