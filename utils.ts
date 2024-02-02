let saldoInicial: number = 0;
const movimientos: string[] = [];

// function pedirConsola() {
//   let value;
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   readline.question("Precio ", (name) => {
//     value = name;
//     readline.close();
//   });
//   return value;
// }

export function depositar(saldoNuevo: number) {
  saldoInicial = saldoInicial + saldoNuevo;
  movimientos.push(`Deposito: ${saldoNuevo}`);
  alert("Se deposito correctamente.");
}

export function consultarSaldo() {
  console.log("Tú saldo es: ", saldoInicial);
}

export function verMovimientos() {
  movimientos.forEach((movimiento) => {
    console.log(movimiento);
  });
}

export function extraer(saldoNuevo: number) {
  if (saldoNuevo <= saldoInicial) {
    saldoInicial = saldoInicial - saldoNuevo;
    movimientos.push(`Extraer: ${saldoNuevo}`);
    console.log("Saldo extraído");
  }
  console.log("No se pudo extraer saldo");
}
