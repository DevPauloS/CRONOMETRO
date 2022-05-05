window.onload = function () {
  
  var second = 00;
  var frac = 00;
  var addFrac = document.getElementById("frac")
  var addSec = document.getElementById("second")
  var botaoStart = document.getElementById('botao-start')
  var botaoPause = document.getElementById('botao-pause')
  var botaoReset = document.getElementById('botao-reset')
  var Intervalo ;

  botaoStart.onclick = function () {
    clearInterval(Intervalo)
      Intervalo = setInterval (startTimer, 10)
  }
  botaoPause.onclick = function () {
    clearInterval(Intervalo) 
  }
  botaoReset.onclick = function () {
    clearInterval(Intervalo)
    frac = "00"
    second = "00"
    addFrac.innerHTML = frac
    addSec.innerHTML = second
  }

  function startTimer() {
    frac++;

    if (frac <= 9) {
      addFrac.innerHTML = "0" + frac;
    }
    if (frac > 9) {
      addFrac.innerHTML = frac;
    }
    if (frac > 99) {
      console.log("seconds")
      second++;
      addSec.innerHTML = "0" + second;
      frac = 0;
      addFrac.innerHTML = "0" + 0
    }
    if (second > 9){
      addSec.innerHTML = second;
    }


  }
 
}