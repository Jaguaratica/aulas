// FUNCTION ALTERAR TITULO
function alterarTitulo() {
    const tituloHtml = document.getElementById("titulo-input");

    if (tituloHtml != null) {
        let novoTituloHtml = document.getElementById("titulo").textContent = tituloHtml.value
    } else {
        console.log("status: null");
    }
}


// FUNCTION ADICIONAR LISTA
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


// FUNCTION DESCOBRIR INDICE
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


// FUNCTION CALCULAR MÉDIA
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
