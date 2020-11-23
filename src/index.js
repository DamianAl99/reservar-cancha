'use strict'
var form = document.querySelector('#formulario');
var btnDiasOcupados = document.querySelector('#btnDiasOcupados');

var cancha1 = ["2020-11-23"];
var getLocalStorage = localStorage.getItem('cancha1');
cancha1 = JSON.parse(getLocalStorage);

function operacion(){

    form.addEventListener("submit", ()=>{
        var fecha = document.querySelector('#dFecha').value;
        var numeroDeCancha = document.querySelector('#cancha').value;

        getLocalStorage = localStorage.getItem('cancha1');
        cancha1 = JSON.parse(getLocalStorage);

        if(numeroDeCancha == 1){
            var controlFecha1 = cancha1.indexOf(fecha);//para comprobar si existe o no (-1 es si no existe)
    
            if(controlFecha1 == -1){//si no encontro algo similar entonces que guarde
                alert('la cancha esta habilitada y ya se guardo en la base de datos')
                cancha1.push(fecha);
                localStorage.setItem('cancha1', JSON.stringify(cancha1));

            }else{//si encontro algo
                alert(`esta cancha esta ocupada el dia ${fecha}`);
            }
    
        }
    });

}
operacion();

var imprimir = document.querySelector('.diasOcupados');
btnDiasOcupados.addEventListener('click', (e)=>{
    e.preventDefault();
    cancha1.forEach(element => {
        imprimir.innerHTML += `
        <li class='list-group-item'>${element}</li>
    `
    });
});




/*function calendario(){
    //let fecha1 = new Date(actual);
    //let fecha2 = new Date(fecha)

    //let resta = fecha2.getTime() - fecha1.getTime()
    //console.log(Math.round(resta/ (1000*60*60*24)))
}
calendario();*/