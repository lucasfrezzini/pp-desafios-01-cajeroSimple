var readlineSync = require("readline-sync");

const {
  depositar,
  consultarSaldo,
  verMovimientos,
  extraer,
} = require("./utils.js");

function ejecutarMenu(option) {
  let price;
  switch (option) {
    case 1:
      price = parseInt(readlineSync.question("¿Cuantó desea depositar? "));
      depositar(price);
      break;
    case 2:
      price = parseInt(readlineSync.question("¿Cuantó desea extraer? "));
      extraer(price);
      break;
    case 3:
      consultarSaldo();
      break;
    case 4:
      verMovimientos();
      break;

    default:
      break;
  }
}

function mostrarMenu() {
  let option;
  while (option != 5) {
    console.log(`
    MENÚ DE OPCIONES 
    ================
    Ingrese el número de opción segun desee:

    1) Depositar
    2) Extraer
    3) Consultar saldo
    4) Ver Movimientos
    5) Salir
    `);
    option = parseInt(readlineSync.question("¿Qué opción deseas? "));
    ejecutarMenu(option);
  }
}

function main() {
  mostrarMenu();
}

main();
