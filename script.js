function convertir() {
    var inputValor = document.getElementById('inputValor').value;
    var inputUnidad = document.getElementById('inputUnidad').value;
    var outputUnidad = document.getElementById('outputUnidad').value;
    var resultado = 0;

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

  }