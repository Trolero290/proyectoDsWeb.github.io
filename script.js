function convertir() {
    const inputValor = document.getElementById('inputValor').value;
    const inputUnidad = document.getElementById('inputUnidad').value;
    const outputUnidad = document.getElementById('outputUnidad').value;
    const boton = document.querySelector('.btn');
    const resultadoDiv = document.getElementById('resultado');
    let resultado = 0;

    boton.classList.add('btn-custom-success');
    boton.classList.remove('btn-custom-primary');

    switch(inputUnidad) {
      case 'm':
        resultado = inputValor;
        break;
      case 'Cm':
        resultado = inputValor / 100;
        break;
      case 'mm':
        resultado = inputValor / 1000;
        break;
      case 'Km':
        resultado = inputValor * 1000;
        break;
    }

    switch(outputUnidad) {
      case 'm':
        break;
      case 'Cm':
        resultado *= 100;
        break;
      case 'mm':
        resultado *= 1000;
        break;
      case 'Km':
        resultado /= 1000;
        break;
    }

    if(isNaN(parseFloat(inputValor))){
        document.getElementById('resultado').innerText = "Ingrese un valor";
    }
    else{
        document.getElementById('resultado').innerText = resultado + outputUnidad;
    }

    resultadoDiv.classList.remove('resultado-animado');
    void resultadoDiv.offsetWidth;
    resultadoDiv.classList.add('resultado-animado');

    boton.classList.remove('shake');
    void boton.offsetWidth;
    boton.classList.add('shake');

  }

  function toggleTheme() {
    var themeButton = document.getElementById('themeButton');
    themeButton.classList.toggle('claro-activo');
    themeButton.classList.toggle('oscuro-activo');
    
    document.body.classList.toggle('dark-mode');

    var buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button) {
        button.classList.toggle('btn-success');
        button.classList.toggle('btn-secondary');
    });
}

