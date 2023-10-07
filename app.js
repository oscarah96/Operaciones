let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacerSuma);

function hacerSuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let s=n1+n2;

    let numeroPrimo = s;
    let esNumeroPrimo = true;

    for (let i = 2; i < numeroPrimo /2; i++){
        if(numeroPrimo % i ==0){
            esNumeroPrimo= false;
            break
        }
    }

    let mensaje = esNumeroPrimo ? "Es número primo" : "No es número primo"
    
    respuesta.innerHTML=`Resultado de la suma: ${s}<br>${mensaje}`;

}

let botonn = document.getElementById('resta');
let resta = document.getElementById('restas');

botonn.addEventListener('click', hacerResta);

function hacerResta(){
    let n3=parseFloat(document.getElementById('n3').value);
    let n4=parseFloat(document.getElementById('n4').value);
    let r=n3-n4;
    

    let numeroPrimo = r;
    let esNumeroPrimo = true;

    for (let i = 2; i < numeroPrimo /2; i++){
        if(numeroPrimo % i ==0){
            esNumeroPrimo= false;
            break
        }
    }

    let mensaje = esNumeroPrimo ? "Es número primo" : "No es número primo"
    
    resta.innerHTML=`Resultado de la resta: ${r}<br>${mensaje}`;
}

let button = document.getElementById('multiplicacion');
let multipliacion = document.getElementById('multiplicar');

button.addEventListener('click', hacerMultiplicacion);

function hacerMultiplicacion(){
    let n5=parseInt(document.getElementById('n5').value);
    let n6=parseInt(document.getElementById('n6').value);
    let multi=n5 * n6;

    let numeroPrimo = multi;
    let esNumeroPrimo = true;

    for (let i = 2; i < numeroPrimo /2; i++){
        if(numeroPrimo % i ==0){
            esNumeroPrimo= false;
            break
        }
    }

    let mensaje = esNumeroPrimo ? "Es número primo" : "No es número primo"

    multipliacion.innerHTML=`Resultado de la muntiplicación: ${multi}<br>${mensaje}`;
}

let buttonn = document.getElementById('division');
let division = document.getElementById('dividir');

buttonn.addEventListener('click', hacerDivision);

function hacerDivision(){
    let n7=parseFloat(document.getElementById('n7').value);
    let n8=parseFloat(document.getElementById('n8').value);
    let divi= n7 / n8;

    let numeroPrimo = divi;
    let esNumeroPrimo = true;

    for (let i = 2; i < numeroPrimo /2; i++){
        if(numeroPrimo % i ==0){
            esNumeroPrimo= false;
            break
        }
    }

    let mensaje = esNumeroPrimo ? "Es número primo" : "No es número primo"

    division.innerHTML=`Resultado de la división: ${divi}<br>${mensaje}`;
}