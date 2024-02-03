let saldoInicial = 100000;
const movimientos = [];

function depositar(saldoNuevo) {
  saldoInicial = saldoInicial + saldoNuevo;
  movimientos.push(`Deposito: $${saldoNuevo}`);
  console.log("Se deposito correctamente.");
}

function consultarSaldo() {
  movimientos.push(`Consulta de saldo: ${saldoInicial}`);
  console.log("Tú saldo es: $", saldoInicial);
}

function verMovimientos() {
  console.log(`
  ULTIMOS MOVIMIENTOS
  ===================
  `);
  movimientos.forEach((movimiento) => {
    console.log(movimiento);
  });
}

function extraer(saldoNuevo) {
  if (saldoNuevo <= saldoInicial) {
    saldoInicial = saldoInicial - saldoNuevo;
    movimientos.push(`Extraer: ${saldoNuevo}`);
    console.log("Saldo extraído");
  } else {
    console.log("No se pudo extraer esa cantidad de dinero.");
  }
}

module.exports = { depositar, consultarSaldo, verMovimientos, extraer };
