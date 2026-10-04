# Busca de Pokémon

Página desenvolvida como atividade da aula de JavaScript do trainee de tecnologia da EJEM.

O projeto utiliza HTML, CSS e JavaScript para consultar a PokéAPI e mostrar informações de um Pokémon.

## Acesse a página

[Abrir a busca de Pokémon](https://hwgskthz.github.io/trainee-tecnologia-ejem/javascript-api/)

## Objetivo da atividade

Criar uma página que permita digitar o nome de um Pokémon e, ao clicar no botão de busca, consultar a PokéAPI e apresentar:

- Nome.
- Tipo ou tipos.
- Imagem oficial.

## Funcionalidades

- Busca pelo nome do Pokémon.
- Remoção dos espaços no início e no fim do nome digitado.
- Conversão do nome para letras minúsculas.
- Exibição do nome, dos tipos e da imagem oficial.
- Aviso quando o campo está vazio.
- Mensagem durante o carregamento.
- Aviso quando o Pokémon não é encontrado.
- Tratamento de falhas na requisição.
- Desativação temporária do botão durante a busca.

## Tecnologias utilizadas

- HTML: estrutura da página.
- CSS: aparência e organização dos elementos.
- JavaScript: interação, consulta à API e atualização da página.
- PokéAPI: fornecimento dos dados dos Pokémon.
- GitHub Pages: publicação da página.

## Arquivos

| Arquivo | Função |
| --- | --- |
| `pokemon-pagina.html` | Estrutura da página |
| `style.css` | Estilos |
| `index.js` | Busca e exibição dos dados |
| `aprendizados.md` | Anotações sobre os conceitos estudados |

## Como utilizar

1. Abra a página pelo link publicado.
2. Digite o nome de um Pokémon, como `pikachu`, `bulbasaur` ou `charizard`.
3. Clique em **Buscar**.
4. Aguarde a exibição das informações.

Os nomes devem corresponder aos identificadores utilizados pela API. Os tipos são apresentados em inglês, conforme os dados retornados.

É necessário acesso à internet para consultar a API e carregar a imagem.

## API utilizada

[PokéAPI](https://pokeapi.co/)