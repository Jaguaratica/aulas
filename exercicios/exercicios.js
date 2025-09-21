// NO FUNCTION FAZER ---------->
// ---------------------------------------------------------------------
// Criar um script que calcula o troco de uma compra. 
// O utilizador informa o valor total e o valor pago, e o programa calcula o troco.

// let total = parseFloat(prompt("Valor total: R$"));
// let pago = parseFloat(prompt("Valor pagamento: R$"));
// let troco = pago - total;

// if (pago >= total) {
//     console.log("Troco: R$" + (troco));
// } else {
//     console.log("Valor pago é insuficiente!");
// }
// --------------------------------------------------------

/*
function calcularTroco() {
    // pega os valores dos inputs
    let valorItem = parseFloat(document.getElementById("input-valor-item").value);
    let pagamento = parseFloat(document.getElementById("input-pagamento").value);

    // validação: checa se os valores são números
    if (isNaN(valorItem) || isNaN(pagamento)) {
        document.getElementById("resultado-calculo").innerText = "Por favor, insira valores válidos.";
        return;
    }

    // cálculo do troco
    let troco = pagamento - valorItem;

    // exibe o resultado
    if (troco < 0) {
        document.getElementById("resultado-calculo").innerText = "Pagamento insuficiente.";
    } else {
        document.getElementById("resultado-calculo").innerText = "Troco: R$ " + troco.toFixed(2);
    }
}

//outra versão:

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Valor total: R$", (total) => {
    rl.question("Valor pago: R$", (pago) => {
        let troco = pago - total;
        if (pago >= total) {
            console.log("Troco: R$" + (troco));
        } else {
            console.log("Valor pago é insuficiente!");
        }

    })

})
*/
