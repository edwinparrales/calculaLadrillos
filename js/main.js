import Ladrillo from "./Ladrillo.js";

const btnCalcular = document.getElementById("btn-calcular");
let result  = document.getElementById("respuesta")
let calCantLadrillos = ()=>{
    let altura = document.getElementById("altura");
    let junVer = document.getElementById("junVertical");
    let largo = document.getElementById("largo");
    let junHor = document.getElementById("junHorizontal");

    

    let ladrillo = new Ladrillo(altura.value,largo.value,10);
  
   
    let alturaTotal = ladrillo.obtenerAlto()+(junVer.value/100);
    let largoTotal = ladrillo.obtenerLargo()+(junHor.value/100);
    const divisor = alturaTotal*largoTotal;
    let cant = 1/divisor;
    cant = Math.ceil(cant);
    console.log("can",cant);
    result.innerHTML=`<h2>${cant}</h2>`
  
}

btnCalcular.addEventListener('click',calCantLadrillos);


