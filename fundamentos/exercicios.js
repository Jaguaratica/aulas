// Criar um script que calcula o troco de uma compra. 
// O utilizador informa o valor total e o valor pago, e o programa calcula o troco.

let total = parseFloat(prompt("Valor total: R$"));
let pago = parseFloat(prompt("Valor pagamento: R$"));
let troco = pago - total;

if (pago >= total) {
    console.log("Troco: R$" + (troco));
} else {
    console.log("Valor pago é insuficiente!");
}


// Correcao exercicio