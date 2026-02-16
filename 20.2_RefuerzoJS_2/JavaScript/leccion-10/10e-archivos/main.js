let calculation = localStorage.getItem("calculo") || '';
let datoCalculado = document.querySelector(".js-calculo");

if(localStorage.getItem("calculo") !== ''){
  mostrarDato();
}

function updateCalculation(dato){

  if (dato === ''){
      calculation = '';
      datoCalculado.innerHTML = ':)';

      }else {
        calculation += dato;
        mostrarDato();
      }

    localStorage.setItem("calculo", calculation);
  
}

function mostrarDato(){
  datoCalculado.innerHTML = `${calculation}`;
}


