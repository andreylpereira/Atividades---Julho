function idade(){
  
  var born = document.getElementById("anoNascido")
  var now = document.getElementById("anoAtual")
  
  var age = now - born;
  alert (
    age + 
    " anos" +
    (age * 12 + " meses") +
    (age * 365 + " dias") +
    (age * 52 + " semanas") +
    (age * 365 * 24 + " horas") +
    (age * 365 *24 *60 + "  minutos")
  );
}