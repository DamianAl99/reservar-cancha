
var form = document.querySelector("#formulario");
var btnDiasOcupados = document.querySelector("#btnDiasOcupados");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let nombre = document.querySelector('#name').value;
    let fecha = document.querySelector("#dFecha").value;
    let numeroDeCancha = document.querySelector("#cancha").value;
    var cancha1=[];
    var cancha2 = [];
    var nombre1 = [];
    var nombre2 = [];
    
    if (numeroDeCancha == 1) {
        
        if (localStorage.getItem("cancha1")) {
            var getLocalStorage = localStorage.getItem("cancha1");
            cancha1 = (JSON.parse(getLocalStorage));
            let controlFecha1 = cancha1.indexOf(fecha); //para comprobar si existe o no (-1 es si no existe)

            var getLocalStorageName = localStorage.getItem('name1');
            nombre1 = (JSON.parse(getLocalStorageName));

            if (controlFecha1 === -1) {//si no encontro algo similar entonces que guarde
                cancha1.push(fecha);
                localStorage.setItem("cancha1", JSON.stringify(cancha1));

                nombre1.push(nombre);
                localStorage.setItem('name1', JSON.stringify(nombre1));
                alert('Fecha Habilitada y Guardada para la cancha 1');
            }else{//si ya hay algo similar en el array de datos
                alert('Esta fecha ya esta reservada, Busca otra Fecha');
            }
        }else{
          //si no tiene que guarde la variable vacia de array en el local storage
          //porque asi es la manera en que el push funcione correctamente
          //al hacer get del localstorage nos enviara un array vacio al que podremos hacerle un push
            localStorage.setItem("cancha1", JSON.stringify(cancha1));
            localStorage.setItem("name1", JSON.stringify(nombre1));
            alert('Vuelve a Ingresar la Fecha');
        }

    }
    if (numeroDeCancha == 2) {
        
      if (localStorage.getItem("cancha2")) {
          var getLocalStorage = localStorage.getItem("cancha2");
          cancha2 = (JSON.parse(getLocalStorage));
          let controlFecha2 = cancha2.indexOf(fecha); //para comprobar si existe o no (-1 es si no existe)

          var getLocalStorageName = localStorage.getItem('name2');
          nombre2 = (JSON.parse(getLocalStorageName));

          if (controlFecha2 === -1) {//si no encontro algo similar entonces que guarde
              cancha2.push(fecha);
              localStorage.setItem("cancha2", JSON.stringify(cancha2));

              nombre2.push(nombre);
              localStorage.setItem('name2', JSON.stringify(nombre2));
              alert('Fecha Habilitada y Guardada para la cancha 2');
          }else{//si ya hay algo similar en el array de datos
              alert('Esta fecha ya esta reservada, Busca otra Fecha');
          }
      }else{
          localStorage.setItem("cancha2", JSON.stringify(cancha2));
          localStorage.setItem("name2", JSON.stringify(nombre2));
          alert('Vuelve a Ingresar la Fecha');
      }

  }
})

var imprimir = document.querySelector(".diasOcupados");
btnDiasOcupados.addEventListener('click', ()=>{
    let getLocalStorage1 = localStorage.getItem('cancha1');
    let cancha1 = JSON.parse(getLocalStorage1);
    let getLocalStorage2 = localStorage.getItem('cancha2');
    let cancha2 = JSON.parse(getLocalStorage2);

    let getLocalStorageName1 = localStorage.getItem('name1');
    let nombre1 = JSON.parse(getLocalStorageName1);
    let getLocalStorageName2 = localStorage.getItem('name2');
    let nombre2 = JSON.parse(getLocalStorageName2);

    for(let i = 0; i < cancha1.length; i++){
      imprimir.innerHTML += `
            <li class='list-group-item'>Cancha 1 en uso el dia: ${cancha1[i]} por ${nombre1[i]}</li>
        `;
    }
    for(let i = 0; i < cancha2.length; i++){
      imprimir.innerHTML += `
            <li class='list-group-item'>Cancha 2 en uso el dia: ${cancha2[i]} por ${nombre2[i]}</li>
        `;
    }
    /*cancha1.forEach(element => {
        imprimir.innerHTML += `
            <li class='list-group-item'>Cancha 1 en uso el dia: ${element}</li>
        `;
    });
    cancha2.forEach(element => {
      imprimir.innerHTML += `
          <li class='list-group-item'>Cancha 2 en uso el dia: ${element}</li>
      `;
  });*/

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
