const {
  depositar,
  consultarSaldo,
  verMovimientos,
  extraer,
} = require("./utils.js");

function mostrarMenu() {
  console.log("====== MENÚ DE OPCIONES =====");
  console.log("Ingrese el número de opcion segun desee:");
  console.log(`
  1) Depositar
  2) Extraer
  3) Consultar saldo
  4) Ver Movimientos
  5) Salir
  `);
}

function main() {
  mostrarMenu();
}

main();
