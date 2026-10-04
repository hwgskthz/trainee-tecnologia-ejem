# JavaScript e integração com APIs

Anotações da aula de JavaScript e dos conceitos utilizados na atividade de busca de Pokémon.

---

## 1. Papel de cada tecnologia

- **HTML:** organiza o conteúdo e os elementos da página.
- **CSS:** define cores, tamanhos, espaçamentos e aparência.
- **JavaScript:** responde às ações do usuário, processa dados e atualiza a página.

Nesta atividade, o JavaScript lê o nome digitado, consulta uma API e apresenta o resultado no HTML.

## 2. Execução do JavaScript

O navegador executa o JavaScript associado à página.

No projeto, o arquivo foi conectado ao HTML por:

```html
<script src="./index.js"></script>
```

JavaScript também pode ser executado fora do navegador em ambientes como Node.js. Para esta atividade, foi utilizado o navegador.

## 3. Variáveis e tipos de dados

Variáveis armazenam valores utilizados pelo programa.

- `let`: permite reatribuir o valor da variável.
- `const`: impede a reatribuição da variável.
- `var`: forma mais antiga de declaração, com regras de escopo diferentes.

Uma variável declarada com `const` pode guardar um objeto ou array cujo conteúdo ainda pode ser alterado. A restrição é sobre reatribuir a variável.

Alguns tipos de dados:

- **String:** texto.
- **Number:** número inteiro ou decimal.
- **Boolean:** verdadeiro ou falso.
- **Null:** ausência de valor definida intencionalmente.
- **Undefined:** valor não definido.

No projeto:

```js
let nome = document.getElementById("pokemon").value;
```

A variável `nome` recebe o texto digitado no campo.

## 4. Funções e eventos

Uma função reúne instruções para realizar uma tarefa.

```js
async function buscarPokemon() {
    // Instruções da busca.
}
```

No HTML, o evento `onclick` chama a função quando o botão é clicado:

```html
<button id="buscar" onclick="buscarPokemon()">Buscar</button>
```

## 5. DOM e acesso ao HTML

O DOM é a representação da página que permite ao JavaScript acessar e modificar seus elementos.

### getElementById

Localiza um elemento pelo seu `id`.

```js
document.getElementById("pokemon")
```

### value

Lê o valor de um campo de entrada.

```js
document.getElementById("pokemon").value
```

### textContent

Define o texto de um elemento.

```js
document.getElementById("nome").textContent = "Nome: " + dados.name;
```

Isso permite mostrar o resultado sem recarregar a página.

## 6. Tratamento do texto digitado

```js
let nome = document.getElementById("pokemon").value.trim().toLowerCase();
```

- `trim()`: remove espaços no início e no fim.
- `toLowerCase()`: transforma as letras em minúsculas.

Por exemplo, `" Pikachu "` passa a ser `"pikachu"`.

## 7. Condições e operadores

As estruturas `if`, `else if` e `else` permitem tomar decisões.

No projeto, o campo vazio é verificado antes da consulta:

```js
if (nome === "") {
    mensagem.textContent = "Digite o nome de um Pokémon.";
    return;
}
```

- `===`: compara valores sem conversão de tipos.
- `==`: pode converter tipos antes da comparação.
- `!`: inverte uma condição.
- `&&`: combina condições com “e”.
- `||`: combina condições com “ou”.

O comando `return` encerra a execução da função naquele ponto.

## 8. APIs

Uma API permite a comunicação entre sistemas.

Nesta atividade, a página solicita informações à PokéAPI usando um endereço que contém o nome do Pokémon:

```js
"https://pokeapi.co/api/v2/pokemon/" + encodeURIComponent(nome)
```

`encodeURIComponent()` prepara o texto para ser utilizado como uma parte do endereço.

A API fornece dados; o código da página organiza como eles serão apresentados.

## 9. Requisições com fetch

`fetch()` realiza uma requisição e retorna uma Promise, que representa um resultado que estará disponível posteriormente.

```js
let resposta = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + encodeURIComponent(nome)
);
```

A resposta contém informações sobre a requisição, como seu status, além do conteúdo retornado.

## 10. async e await

- `async`: define uma função assíncrona, que retorna uma Promise.
- `await`: aguarda o resultado de uma Promise antes de continuar aquela função.

Enquanto a requisição é aguardada, o navegador pode continuar respondendo a outras interações.

```js
let resposta = await fetch(url);
let dados = await resposta.json();
```

Primeiro, a função aguarda a resposta. Depois, aguarda a leitura e a conversão do conteúdo JSON.

## 11. JSON e objetos

JSON é um formato textual utilizado para representar dados estruturados.

```js
let dados = await resposta.json();
```

Nesse caso, `json()` converte o conteúdo recebido em um objeto JavaScript.

As propriedades desse objeto são acessadas para obter as informações:

```js
dados.name
dados.types
dados.sprites
```

## 12. Arrays e repetição

Arrays armazenam vários elementos. Seus índices começam em zero.

Um Pokémon pode ter mais de um tipo, e os tipos são retornados em um array.

O laço `for` percorre esse array:

```js
let tipos = "";

for (let i = 0; i < dados.types.length; i++) {
    if (i > 0) {
        tipos += ", ";
    }

    tipos += dados.types[i].type.name;
}
```

- `i`: índice do elemento atual.
- `length`: quantidade de elementos.
- `i++`: incrementa o índice.
- `+=`: acrescenta o texto ao valor existente.

A condição `i > 0` acrescenta uma vírgula antes dos tipos seguintes, sem colocar uma vírgula antes do primeiro.

A aula também apresentou `while`, que repete um bloco enquanto uma condição for verdadeira.

## 13. Status da resposta

O código verifica se a busca foi bem-sucedida.

```js
if (resposta.status === 404) {
    mensagem.textContent = "Pokémon não encontrado. Confira o nome.";
    botao.disabled = false;
    return;
}
```

O status `404` indica que o recurso solicitado não foi encontrado.

```js
if (!resposta.ok) {
    throw new Error("Erro na busca");
}
```

`resposta.ok` indica se o status está entre 200 e 299.

O `fetch()` não lança um erro automaticamente só porque recebeu um status HTTP de erro. Por isso, o código verifica o status e utiliza `throw` quando necessário.

## 14. Tratamento de erros

`try` e `catch` permitem tratar erros durante a execução.

```js
try {
    // Consulta e processamento dos dados.
} catch (erro) {
    mensagem.textContent = "Não foi possível buscar. Tente novamente.";
}
```

- `try`: contém as operações que podem falhar.
- `catch`: trata um erro lançado durante essas operações.

No projeto, isso permite apresentar uma mensagem quando ocorre uma falha, como um problema de conexão.

## 15. Exibição da imagem

```js
imagem.src = dados.sprites.other["official-artwork"].front_default;
imagem.alt = "Imagem de " + dados.name;
imagem.hidden = false;
```

- `src`: define o endereço da imagem.
- `alt`: fornece uma descrição textual.
- `hidden`: controla se o elemento está oculto.

A propriedade `"official-artwork"` é acessada com colchetes porque seu nome contém um hífen.

## 16. Carregamento e limpeza do resultado

Antes de uma nova busca, o código limpa o nome e os tipos anteriores e oculta a imagem.

Durante a requisição:

```js
mensagem.textContent = "Buscando...";
botao.disabled = true;
```

Isso informa que a busca está em andamento e impede novos cliques no botão enquanto ela é processada.

Ao finalizar, o botão é habilitado novamente:

```js
botao.disabled = false;
```

## 17. HTML e CSS aplicados

No HTML:

- `label` identifica o campo de entrada.
- `for` conecta o label ao `id` do input.
- `placeholder` mostra um exemplo de preenchimento.
- `role="status"` identifica uma área de mensagens de status para tecnologias assistivas.
- A imagem começa oculta com `hidden`.

No CSS:

- `background-color` define as cores de fundo.
- `padding` cria espaço interno.
- `margin` cria espaço externo.
- `max-width` limita a largura.
- `border-radius` arredonda as bordas.
- `cursor: pointer` indica que o botão pode ser clicado.

## 18. Fluxo da aplicação

1. O usuário digita o nome.
2. O clique chama a função de busca.
3. O código limpa o resultado anterior e prepara o texto.
4. Se o campo estiver vazio, mostra um aviso e encerra a função.
5. A página mostra “Buscando...” e desativa o botão.
6. O código consulta a PokéAPI.
7. A resposta é verificada e os dados são lidos.
8. O nome, os tipos e a imagem são apresentados.
9. Se ocorrer um problema, uma mensagem é exibida.
10. O botão é habilitado novamente.

## Projeto prático

[Abrir a página de busca de Pokémon](https://hwgskthz.github.io/trainee-tecnologia-ejem/javascript-api/pokemon-pagina.html)