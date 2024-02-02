"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extraer = exports.verMovimientos = exports.consultarSaldo = exports.depositar = void 0;
var saldoInicial = 0;
var movimientos = [];
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
function depositar(saldoNuevo) {
    saldoInicial = saldoInicial + saldoNuevo;
    movimientos.push("Deposito: ".concat(saldoNuevo));
    alert("Se deposito correctamente.");
}
exports.depositar = depositar;
function consultarSaldo() {
    console.log("Tú saldo es: ", saldoInicial);
}
exports.consultarSaldo = consultarSaldo;
function verMovimientos() {
    movimientos.forEach(function (movimiento) {
        console.log(movimiento);
    });
}
exports.verMovimientos = verMovimientos;
function extraer(saldoNuevo) {
    if (saldoNuevo <= saldoInicial) {
        saldoInicial = saldoInicial - saldoNuevo;
        movimientos.push("Extraer: ".concat(saldoNuevo));
        console.log("Saldo extraído");
    }
    console.log("No se pudo extraer saldo");
}
exports.extraer = extraer;
