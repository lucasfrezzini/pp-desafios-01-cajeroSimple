let saldoInicial = 0;
const movimientos = [];

function depositar(saldoNuevo) {
  saldoInicial = saldoInicial + saldoNuevo;
  movimientos.push(`Deposito: ${saldoNuevo}`);
  alert("Se deposito correctamente.");
}

function consultarSaldo() {
  console.log("Tú saldo es: ", saldoInicial);
}

function verMovimientos() {
  movimientos.forEach((movimiento) => {
    console.log(movimiento);
  });
}

function extraer(saldoNuevo) {
  if (saldoNuevo <= saldoInicial) {
    saldoInicial = saldoInicial - saldoNuevo;
    movimientos.push(`Extraer: ${saldoNuevo}`);
    console.log("Saldo extraído");
  }
  console.log("No se pudo extraer saldo");
}

module.exports = { depositar, consultarSaldo, verMovimientos, extraer };
