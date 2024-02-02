import { depositar, consultarSaldo, verMovimientos, extraer } from "./utils.js";

function mostrarMenu() {}

function main() {
  const saldoInicial = prompt("Ingrese el deposito");
  const saldoInicialParseado = Number(saldoInicial);
  depositar(saldoInicialParseado);
}

main();
