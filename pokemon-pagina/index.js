async function buscarPokemon() {
    // Lê o nome digitado e deixa tudo em letras minúsculas.
    let nome = document.getElementById("pokemon").value.trim().toLowerCase();
    let mensagem = document.getElementById("mensagem");
    let imagem = document.getElementById("imagem");
    let botao = document.getElementById("buscar");

    // Limpa o resultado da busca anterior.
    document.getElementById("nome").textContent = "";
    document.getElementById("tipos").textContent = "";
    imagem.hidden = true;

    if (nome === "") {
        mensagem.textContent = "Digite o nome de um Pokémon.";
        return;
    }

    mensagem.textContent = "Buscando...";
    botao.disabled = true;

    try {
        // Busca os dados na API.
        let resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + encodeURIComponent(nome));

        if (resposta.status === 404) {
            mensagem.textContent = "Pokémon não encontrado. Confira o nome.";
            botao.disabled = false;
            return;
        }

        if (!resposta.ok) {
            throw new Error("Erro na busca");
        }

        let dados = await resposta.json();

        // Um Pokémon pode ter mais de um tipo.
        let tipos = "";
        for (let i = 0; i < dados.types.length; i++) {
            if (i > 0) {
                tipos += ", ";
            }
            tipos += dados.types[i].type.name;
        }

        // Mostra o nome, os tipos e a imagem oficial.
        document.getElementById("nome").textContent = "Nome: " + dados.name;
        document.getElementById("tipos").textContent = "Tipo(s): " + tipos;
        imagem.src = dados.sprites.other["official-artwork"].front_default;
        imagem.alt = "Imagem de " + dados.name;
        imagem.hidden = false;
        mensagem.textContent = "";
    } catch (erro) {
        mensagem.textContent = "Não foi possível buscar. Tente novamente.";
    }

    botao.disabled = false;
}