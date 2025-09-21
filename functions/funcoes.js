// 1. FUNCTION ALTERAR TITULO funcao_tradicional.js
function alterarTitulo() {
    const tituloHtml = document.getElementById("titulo-input");

    if (tituloHtml  && tituloHtml.value.trim() != "") {
        let novoTituloHtml = document.getElementById("titulo").textContent = tituloHtml.value
    } else {
        document.getElementById("titulo-null").textContent = "Null";
    }
}


// 2. FUNCTION ADICIONAR LISTA funcao_tradicional.js
function adicionarLista() {
    const itemHtml = document.getElementById("item-input");
    const novoItemTexto = itemHtml.value

    if (novoItemTexto.trim() != "") {
        const novoItem = document.createElement("li");

        novoItem.textContent = novoItemTexto;

        let listaItens = document.getElementById("lista-itens");
        listaItens.appendChild(novoItem);

        itemHtml.value = "";
    } else {
        console.log("status: null")
    }
}


// 3. FUNCTION DESCOBRIR INDICE arrays.js
function descobrirIndice() {
        frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"];
        const inputDasFrutas = document.getElementById("frutas-input");
        const frutaDigitada = inputDasFrutas.value.trim();
        
        const indice = frutas.findIndex(fruta => 
        fruta.toLowerCase() === frutaDigitada.toLowerCase()
        )

        const resultadoElemento = document.getElementById("resultado");

        if (indice !== -1) {
        resultadoElemento.textContent = `Índice encontrado: ${indice}`;
    } else {
        resultadoElemento.textContent = "Fruta não encontrada!";
    }
        return indice;
}


// 4. FUNCTION CALCULAR MÉDIA string.js
function calcularNota() {
    const nota1 = parseFloat(document.getElementById("nota-1").value);
    const nota2 = parseFloat(document.getElementById("nota-2").value);
    const nota3 = parseFloat(document.getElementById("nota-3").value);
    const media = (nota1 + nota2 + nota3) / 3;

    const resultadoElemento = document.getElementById("resultado-calculo");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoElemento.textContent = "Coloque todas as notas!";
        return;
    }

    if (media < 5) {
        resultadoElemento.textContent = "Sua nota final é: " + media.toFixed(2) + " - Reprovado";
    } else if (media >= 7) {
        resultadoElemento.textContent = "Sua nota final é: " + media.toFixed(2) + " - Aprovado";
    } else {
        resultadoElemento.textContent = "Sua nota final é: " + media.toFixed(2) + " - Recuperação";
    }
}

// 5. FUNCTION ALTERAR ITEM DA LISTA arrays.js
function alterarItemLista() { 
    const inputValor = document.getElementById("input-lista").value;
    const listaElement = document.getElementById("lista");
    const itens = listaElement.getElementsByTagName("li");
    
    if (inputValor.includes(",")) {
        const partes = inputValor.split(",");
        const indice = parseInt(partes[0]);
        const novoValor = partes[1].trim();
        
        if (!isNaN(indice) && indice >= 0 && indice < itens.length) {
            itens[indice].textContent = novoValor;
        }
    } 
}

// 6. FUNCTION CALCULAR TROCO exercicios.js
function calcularTroco() {
    let valorItem = parseFloat(document.getElementById("input-valor-item").value);
    let pagamento = parseFloat(document.getElementById("input-pagamento").value);

    if (isNaN(valorItem) || isNaN(pagamento) || valorItem < 0 || pagamento < 0) {
        document.getElementById("resultado-troco").innerText = "Por favor, insira valores válidos e não negativos.";
        return;
    }

    let troco = pagamento - valorItem;

    if (troco < 0) {
        document.getElementById("resultado-troco").innerText = "Pagamento insuficiente.";
    } else {
        document.getElementById("resultado-troco").innerText = "Troco: R$ " + troco.toFixed(2);
    }
}