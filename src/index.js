
var form = document.querySelector("#formulario");
var btnDiasOcupados = document.querySelector("#btnDiasOcupados");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let fecha = document.querySelector("#dFecha").value;
    let numeroDeCancha = document.querySelector("#cancha").value;
    var cancha1=[];
    
    if (numeroDeCancha == 1) {
        
        if (localStorage.getItem("cancha1")) {
            var getLocalStorage = localStorage.getItem("cancha1");
            cancha1 = (JSON.parse(getLocalStorage));
            let controlFecha1 = cancha1.indexOf(fecha); //para comprobar si existe o no (-1 es si no existe)

            if (controlFecha1 === -1) {//si no encontro algo similar entonces que guarde
                cancha1.push(fecha);
                localStorage.setItem("cancha1", JSON.stringify(cancha1));
                alert('Fecha Habilitada para');
            }else{//si ya hay algo similar en el array de datos
                alert('Esta fecha ya esta reservada, Busca otra Fecha');
            }
        }else{
            localStorage.setItem("cancha1", JSON.stringify(cancha1));
            alert('Vuelve a Ingresar la Fecha');
        }

    }
})

var imprimir = document.querySelector(".diasOcupados");
btnDiasOcupados.addEventListener('click', ()=>{
    let getLocalStorage = localStorage.getItem('cancha1');
    let cancha1 = JSON.parse(getLocalStorage);
    cancha1.forEach(element => {
        imprimir.innerHTML += `
            <li class='list-group-item'>${element}</li>
        `;
    });
});
  
/*   if (localStorage.getItem("cancha1")) {
        getLocalStorage = localStorage.getItem("cancha1");
        cancha1 = JSON.parse(getLocalStorage);
        let controlFecha1 = cancha1.indexOf(fecha); //para comprobar si existe o no (-1 es si no existe)

        if (controlFecha1 === -1) {
          //si no encontro algo similar entonces que guarde
          cancha1 = cancha1.push(fecha);
          localStorage.setItem("cancha1", JSON.stringify(cancha1));
          alert("la cancha esta habilitada y ya se guardo en la base de datos");
        } else {
          //si encontro algo
          alert(`Esta cancha esta ocupada el dia ${fecha}`);
        }
      } else {
        localStorage.setItem("cancha1", JSON.stringify(fecha));
        alert("Fue una Prueba vuelve a intentarlo");
      }
    }
});


let imprimir = document.querySelector(".diasOcupados");
btnDiasOcupados.addEventListener("click", (e) => {
  e.preventDefault();
  let getLocalStorage = localStorage.getItem("cancha1");
  let cancha1 = JSON.parse(getLocalStorage);
  console.log(cancha1);
  cancha1.forEach((element) => {
    imprimir.innerHTML += `
        <li class='list-group-item'>${element}</li>
    `;
  });
});

/*function calendario(){
    //let fecha1 = new Date(actual);
    //let fecha2 = new Date(fecha)

    //let resta = fecha2.getTime() - fecha1.getTime()
    //console.log(Math.round(resta/ (1000*60*60*24)))
}
calendario();*/
