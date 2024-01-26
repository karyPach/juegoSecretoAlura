let numeroSecreto=0;
let numeroIntentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
console.log(numeroSecreto);
function asignarTextoElemento( elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}
//declaración de la función
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`Acertaste el número, en ${numeroIntentos} ${(numeroIntentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //remover atributo
    } else{
        if( numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor ');
            numeroIntentos+=1;
        }else{
            asignarTextoElemento('p','El numero secreto es mayor ');
            numeroIntentos+=1;

        }
        limpiarCaja();
    }

    return;
}
function limpiarCaja(){
    let valorCaja= document.querySelector('#valorUsuario').value=''; //por id
    
}
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        document.querySelector('#intentar').setAttribute('disabled','true');
    }else{
    //si el numero generado esta incluido en la lista

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
    
}


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indicar un número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    numeroIntentos=1;

}
function reiniciarJuego() {
    //limpar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled','true');
    //deshabilitar el boton de nuevo juego

   
}
condicionesIniciales();


