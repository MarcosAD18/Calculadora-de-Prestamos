function calcularPrestamo(){
let monto= parseFloat(document.querySelector("#monto").value);
    let interes= parseFloat(document.querySelector("#interes").value);
    let tiempo= parseFloat(document.querySelector("#tiempo").value);
    let alerta= document.querySelector("alerta");
    
    var interesf = interes/12/100;
    
    var total= monto* Math.pow(1+interesf,tiempo)*interesf/(Math.pow(1+interesf,tiempo)-1)

if(!/^ *(?:-?\d+(?:\.\d+)?|) *$/.test(monto)||!/^ *(?:-?\d+(?:\.\d+)?|) *$/.test(interes)||!/^ *(?:-?\d+(?:\.\d+)?|) *$/.test(tiempo))
{
    var x = document.getElementById("alerta");   
    var alertaROJA= document.getElementById("alertaRoja");

    x.style.display="none";
    alertaROJA.style.display="block";
    alertaROJA.innerHTML="Por Favor rellene todos los campos con valores adecuados"

    return false;   
    
}
else {
 
    var x = document.getElementById("alerta");   
    var alertaROJA= document.getElementById("alertaRoja");

    alertaROJA.style.display="none";
    x.style.display = "block";
    x.innerHTML='Tu cuota mensual es DOP'+"$"+" "+(total.toFixed(2))
    
    return false;
}

return false;
}









