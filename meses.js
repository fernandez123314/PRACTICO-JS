var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var diasDelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var meses31 = "";
var meses30 = "";

for (var i = 0; i < meses.length; i++) {
  if (diasDelMes[i] === 31) {
    meses31 += meses[i] + ", ";
  } else if (diasDelMes[i] === 30) {
    meses30 += meses[i] + ", ";
  }
}

alert("Meses con 31 días: " + meses31 + "\nMeses con 30 días: " + meses30);
