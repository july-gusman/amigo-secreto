// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim(); // Remove espaços em branco extras

    // Validação do campo de entrada
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome ao array e atualiza a lista na tela
    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = ""; // Limpa o campo de entrada
    inputAmigo.focus(); // Volta o foco para o campo
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de preenchê-la novamente

    // Cria itens da lista com os nomes do array
    amigos.forEach((amigo) => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Valida se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione nomes antes de sortear.");
        return;
    }

    // Realiza o sorteio
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
