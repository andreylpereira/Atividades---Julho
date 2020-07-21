function calcimc() {

var peso = document.getElementById("kilo")
var altura = document.getElementById("metro")
var imcmedia = peso / (altura * altura);

    if (imcmedia <= 18.5) {
          alert ("Abaixo do Peso"); 

        } else if (imcmedia >= 18.5 && imcmedia <= 25) {
          alert ("Na faixa de peso Ideal");

        } else if (imcmedia >= 25.0 && imcmedia <= 29.9) {
          alert ("Acima do Peso");

        } else {
          alert ("Muito Acima do Peso");
        }
}
