const result = document.querySelector("#resultado");
const val1 = document.querySelector("#val1");
const val2 = document.querySelector("#val2");
console.log(val1.value);
function sumar(event) {
    result.innerHTML=parseInt(val1.value)+parseInt(val2.value);
}