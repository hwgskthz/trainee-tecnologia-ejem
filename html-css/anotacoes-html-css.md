# HTML e CSS

Anotações da aula de HTML e CSS e do desenvolvimento do portfólio pessoal.

---

## 1. Papel de cada tecnologia

### HTML

HTML significa **HyperText Markup Language**. É uma linguagem de marcação utilizada para estruturar e atribuir significado ao conteúdo de uma página.

O HTML determina:

- o que é um título;
- o que é um parágrafo;
- onde existe uma imagem;
- quais elementos são links;
- como o conteúdo está organizado.

### CSS

CSS significa **Cascading Style Sheets**. É uma linguagem de estilos utilizada para definir a aparência dos elementos HTML.

O CSS controla:

- cores;
- fontes;
- tamanhos;
- margens e espaçamentos;
- alinhamento;
- posicionamento;
- layout;
- adaptação para diferentes telas.

### JavaScript

JavaScript adiciona comportamento e interatividade à página.

```text
HTML       → estrutura e conteúdo
CSS        → aparência e layout
JavaScript → comportamento e interação
```

---

# HTML

## 2. Estrutura básica

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Título da página</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Conteúdo visível da página -->
</body>

</html>
```

### `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

Informa ao navegador que o documento utiliza HTML5.

### `<html>`

```html
<html lang="pt-BR">
```

Representa o início do documento HTML.

O atributo `lang="pt-BR"` informa que o conteúdo está em português brasileiro.

### `<head>`

```html
<head>
    <!-- Configurações da página -->
</head>
```

Armazena configurações e metadados que não aparecem como conteúdo principal da página.

### Codificação de caracteres

```html
<meta charset="UTF-8">
```

Permite exibir corretamente acentos, símbolos e caracteres especiais.

### Adaptação para diferentes telas

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Faz a largura da página acompanhar a largura do dispositivo.

### `<title>`

```html
<title>Portfólio | Thaís Balbino</title>
```

Define o texto exibido na aba do navegador.

### Conexão com o CSS

```html
<link rel="stylesheet" href="style.css">
```

- `rel="stylesheet"` informa que o arquivo é uma folha de estilos;
- `href="style.css"` indica a localização do CSS.

---

## 3. Tags de texto

### Títulos

```html
<h1>Título principal</h1>
<h2>Título de uma seção</h2>
<h3>Título de um cartão</h3>
```

O HTML possui títulos de `<h1>` até `<h6>`.

```text
<h1> → título mais importante
<h2> → seção subordinada ao título principal
<h3> → subseção ou título de um componente
...
<h6> → menor nível da hierarquia
```

O tamanho visual pode ser alterado pelo CSS. A escolha da tag deve representar a importância do conteúdo.

### Parágrafo

```html
<p>Este é um parágrafo.</p>
```

A tag `<p>` representa um parágrafo.

Abertura:

```html
<p>
```

Fechamento:

```html
</p>
```

A barra `/` indica o fechamento da tag.

### Quebra de linha

```html
Primeira linha<br>
Segunda linha
```

A tag `<br>` força uma quebra de linha.

Para criar espaços visuais entre elementos, o ideal é usar propriedades CSS como `margin` e `padding`.

### `<span>`

```html
<p>
    Meu nome é <span class="destaque">Thaís</span>.
</p>
```

O `<span>` seleciona uma pequena parte de um texto sem criar um novo bloco.

É útil para aplicar estilos específicos:

```css
.destaque {
    color: purple;
    font-weight: bold;
}
```

---

## 4. Links

### Link externo

```html
<a href="https://github.com/">Acessar o GitHub</a>
```

O atributo `href` define o destino do link.

### Abrir em outra aba

```html
<a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
>
    Acessar o GitHub
</a>
```

- `target="_blank"` abre o destino em outra aba;
- `rel="noopener noreferrer"` adiciona proteção ao abrir páginas externas.

### Link para uma seção da página

```html
<a href="#projetos">Conheça meus projetos</a>
```

O `#projetos` procura um elemento com o ID correspondente:

```html
<section id="projetos">
    <h2>Projetos</h2>
</section>
```

A conexão acontece assim:

```text
href="#projetos"
        ↓
id="projetos"
```

---

## 5. Imagens

```html
<img
    src="assets/foto-thais.jpg"
    alt="Foto de Thaís Balbino"
>
```

### `src`

Indica o caminho da imagem:

```html
src="assets/foto-thais.jpg"
```

Esse caminho informa que:

1. existe uma pasta chamada `assets`;
2. dentro dela existe o arquivo `foto-thais.jpg`.

### `alt`

```html
alt="Foto de Thaís Balbino"
```

Fornece um texto alternativo caso a imagem não carregue e auxilia tecnologias de acessibilidade.

---

## 6. IDs e classes

### ID

```html
<section id="sobre">
```

Um ID identifica um elemento específico da página.

No CSS, um ID é selecionado com `#`:

```css
#sobre {
    background-color: white;
}
```

O mesmo ID não deve ser repetido em vários elementos da página.

### Classe

```html
<div class="projeto">
```

Uma classe pode ser reutilizada em vários elementos.

No CSS, uma classe é selecionada com ponto:

```css
.projeto {
    background-color: white;
}
```

### Diferença

```text
id    → identificação única
class → estilo ou comportamento reutilizável
```

---

## 7. `<div>`

```html
<div class="projeto">
    <h3>Nome do projeto</h3>
    <p>Descrição do projeto.</p>
</div>
```

A `<div>` é um contêiner neutro utilizado para agrupar elementos.

Ela não possui significado visual próprio. Sua aparência é definida pelo CSS.

Exemplo de vários cartões agrupados:

```html
<div class="lista-projetos">

    <div class="projeto">
        <h3>Projeto 1</h3>
    </div>

    <div class="projeto">
        <h3>Projeto 2</h3>
    </div>

</div>
```

```text
lista-projetos
├── projeto 1
└── projeto 2
```

---

## 8. HTML semântico

Tags semânticas ajudam a explicar o papel de cada parte da página.

### Cabeçalho

```html
<header>
    <!-- Cabeçalho da página -->
</header>
```

### Navegação

```html
<nav>
    <!-- Links de navegação -->
</nav>
```

### Conteúdo principal

```html
<main>
    <!-- Conteúdo principal -->
</main>
```

Normalmente, uma página possui apenas um `<main>`.

### Seção

```html
<section id="sobre">
    <!-- Conteúdo sobre um tema -->
</section>
```

Cada `<section>` representa uma parte temática da página.

### Rodapé

```html
<footer>
    <!-- Informações finais -->
</footer>
```

Estrutura utilizada no portfólio:

```text
body
├── header
│   └── nav
├── main
│   ├── section início
│   ├── section sobre
│   ├── section tecnologias
│   ├── section projetos
│   ├── section interesses
│   └── section contato
└── footer
```

---

## 9. Checkbox

```html
<label>
    <input type="checkbox">
    Estou aprendendo HTML
</label>
```

- `<input>` cria um campo de entrada;
- `type="checkbox"` define o formato de caixa de seleção;
- `<label>` fornece uma descrição para o campo.

---

## 10. Tabelas

```html
<table>
    <tr>
        <th>Tecnologia</th>
        <th>Status</th>
    </tr>

    <tr>
        <td>HTML</td>
        <td>Em aprendizado</td>
    </tr>
</table>
```

- `<table>` cria a tabela;
- `<tr>` cria uma linha;
- `<th>` cria uma célula de cabeçalho;
- `<td>` cria uma célula comum.

---

# CSS

## 11. Sintaxe do CSS

```css
p {
    color: purple;
    font-size: 18px;
}
```

```text
p         → seletor
color     → propriedade
purple    → valor
```

Cada declaração termina com ponto e vírgula:

```css
propriedade: valor;
```

---

## 12. Seletores

### Selecionar uma tag

```css
body {
    margin: 0;
}
```

Seleciona todos os elementos com aquela tag.

### Selecionar uma classe

```css
.projeto {
    background-color: white;
}
```

Classes começam com `.`.

### Selecionar um ID

```css
#inicio {
    text-align: center;
}
```

IDs começam com `#`.

### Selecionar elementos internos

```css
header nav a {
    color: white;
}
```

Seleciona links `<a>` que estão dentro de um `<nav>`, que está dentro do `<header>`.

### Filho direto

```css
section > h2 {
    text-align: center;
}
```

O sinal `>` seleciona somente os `<h2>` que são filhos diretos de uma `<section>`.

### Agrupar seletores

```css
.tecnologia,
.projeto,
.interesse {
    background-color: white;
}
```

A vírgula aplica as mesmas regras a vários seletores.

---

## 13. Variáveis de cores

```css
:root {
    --roxo: #7c3aed;
    --branco: #ffffff;
}
```

O `:root` permite declarar variáveis disponíveis em toda a página.

Uso:

```css
body {
    background-color: var(--branco);
}

h1 {
    color: var(--roxo);
}
```

As variáveis facilitam a alteração e a reutilização das cores.

---

## 14. Cores e fundos

### Cor do texto

```css
color: var(--roxo);
```

### Cor de fundo

```css
background-color: var(--roxo-claro);
```

### Transparência em uma cor

```css
box-shadow: 0 8px 24px rgba(76, 29, 149, 0.25);
```

No `rgba()`:

```text
76, 29, 149 → quantidades de vermelho, verde e azul
0.25        → nível de transparência
```

---

## 15. Fontes e textos

### Família da fonte

```css
font-family: "Segoe UI", Arial, sans-serif;
```

O navegador tenta usar as fontes na ordem apresentada.

### Tamanho

```css
font-size: 18px;
```

### Peso

```css
font-weight: bold;
```

Ou:

```css
font-weight: 900;
```

Quanto maior o valor, mais grossa tende a ser a fonte.

### Alinhamento

```css
text-align: center;
```

Centraliza o texto e conteúdos inline.

### Espaço entre linhas

```css
line-height: 1.6;
```

### Decoração de links

```css
text-decoration: none;
```

Remove o sublinhado padrão.

### Espaço entre letras

```css
letter-spacing: 0.5px;
```

---

## 16. Espaçamentos

### Margem

```css
margin: 20px;
```

A margem cria espaço **fora** do elemento.

```css
margin: 20px auto;
```

- `20px`: espaço superior e inferior;
- `auto`: centralização horizontal.

### Preenchimento

```css
padding: 20px;
```

O `padding` cria espaço **dentro** do elemento.

```text
margin  → espaço externo
padding → espaço interno
```

---

## 17. Tamanhos

```css
width: 280px;
height: 280px;
```

Define largura e altura fixas.

```css
max-width: 600px;
```

Impede que o elemento ultrapasse determinada largura.

```css
min-height: 80vh;
```

Define uma altura mínima.

A unidade `vh` representa uma porcentagem da altura da tela:

```text
80vh → 80% da altura visível
```

---

## 18. Bordas e sombras

### Borda

```css
border: 6px solid white;
```

```text
6px   → espessura
solid → tipo da borda
white → cor
```

### Cantos arredondados

```css
border-radius: 12px;
```

Para criar uma imagem circular:

```css
border-radius: 50%;
```

Para criar um formato de cápsula:

```css
border-radius: 999px;
```

### Sombra

```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

```text
0     → deslocamento horizontal
4px   → deslocamento vertical
12px  → desfoque
rgba  → cor e transparência
```

---

## 19. Imagens no CSS

```css
.foto-perfil {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 50%;
}
```

`object-fit: cover` preenche o espaço definido sem deformar a imagem. Partes da imagem podem ser recortadas para preservar sua proporção.

---

## 20. Box sizing

```css
* {
    box-sizing: border-box;
}
```

O seletor `*` seleciona todos os elementos.

Com `border-box`, o `padding` e a borda passam a fazer parte do tamanho total definido para o elemento.

---

## 21. Flexbox

O Flexbox ajuda a organizar elementos em linha ou coluna.

```css
.lista-projetos {
    display: flex;
}
```

### Centralização no eixo principal

```css
justify-content: center;
```

### Alinhamento no eixo secundário

```css
align-items: center;
```

### Espaço entre elementos

```css
gap: 20px;
```

### Permitir quebra de linha

```css
flex-wrap: wrap;
```

Os elementos passam para a linha seguinte quando não há espaço suficiente.

### Alterar a direção

```css
flex-direction: column;
```

```text
row    → elementos lado a lado
column → elementos um abaixo do outro
```

### Exemplo completo

```css
.sobre-conteudo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
}
```

Esse código coloca a foto e o texto lado a lado, centralizados e separados por `60px`.

---

## 22. Cartões flexíveis

```css
.projeto {
    flex: 1 1 250px;
    max-width: 310px;
}
```

Os valores de `flex` representam:

```text
1     → pode crescer
1     → pode diminuir
250px → tamanho-base
```

### Impedir encolhimento

```css
.foto-perfil {
    flex-shrink: 0;
}
```

Impede que a foto seja espremida pelo Flexbox.

---

## 23. Posicionamento

```css
header {
    position: sticky;
    top: 0;
    z-index: 10;
}
```

- `position: sticky` mantém o cabeçalho visível durante a rolagem;
- `top: 0` fixa sua posição no topo;
- `z-index: 10` mantém o cabeçalho acima dos demais elementos.

---

## 24. Pseudo-classes

### Link visitado

```css
a:visited {
    color: purple;
}
```

Aplica estilo a links que já foram acessados.

### Passagem do mouse

```css
a:hover {
    color: white;
}
```

Aplica estilo enquanto o mouse está sobre o elemento.

---

## 25. Transições e transformações

### Transição

```css
.projeto {
    transition: transform 0.2s, box-shadow 0.2s;
}
```

Cria uma mudança suave durante `0.2` segundos.

### Movimento

```css
.projeto:hover {
    transform: translateY(-4px);
}
```

Move o cartão quatro pixels para cima quando o mouse passa sobre ele.

---

## 26. Rolagem suave

```css
html {
    scroll-behavior: smooth;
}
```

Faz a navegação entre as seções acontecer suavemente.

```css
section {
    scroll-margin-top: 75px;
}
```

Reserva espaço acima da seção para impedir que o menu fixo esconda seu título.

---

## 27. Funções CSS

### `var()`

```css
color: var(--roxo);
```

Obtém o valor de uma variável CSS.

### `rgba()`

```css
background-color: rgba(0, 0, 0, 0.1);
```

Cria uma cor com transparência.

### `calc()`

```css
min-height: calc(100vh - 64px);
```

Realiza um cálculo entre valores CSS.

### `clamp()`

```css
font-size: clamp(38px, 6vw, 58px);
```

Define:

```text
38px → tamanho mínimo
6vw  → tamanho adaptável
58px → tamanho máximo
```

---

## 28. Responsividade

Responsividade permite adaptar a página para diferentes tamanhos de tela.

```css
@media (max-width: 700px) {
    .sobre-conteudo {
        flex-direction: column;
        text-align: center;
    }

    .foto-perfil {
        width: 210px;
        height: 210px;
    }
}
```

Essa regra é aplicada somente quando a tela possui largura igual ou inferior a `700px`.

Na tela grande:

```text
foto | texto
```

Na tela pequena:

```text
foto
texto
```

---

## 29. Tailwind CSS

Tailwind CSS é um framework orientado a classes utilitárias.

CSS tradicional:

```css
.titulo {
    color: blue;
    font-size: 24px;
    text-align: center;
}
```

HTML:

```html
<h1 class="titulo">Olá!</h1>
```

Com Tailwind, os estilos são representados por classes prontas:

```html
<h1 class="text-blue-500 text-2xl text-center">
    Olá!
</h1>
```

O CSS tradicional ajuda a compreender as propriedades que as classes do Tailwind representam.

---

# Organização do projeto

## 30. Estrutura de pastas

```text
html-css/
├── anotacoes-html-css.md
└── portfolio-pessoal/
    ├── assets/
    │   └── foto-thais.jpg
    ├── index.html
    └── style.css
```

- `index.html`: estrutura e conteúdo da página;
- `style.css`: aparência e organização visual;
- `assets`: imagens e outros arquivos utilizados pelo site;
- `anotacoes-html-css.md`: registro dos conteúdos estudados.

---

## 31. Visualização local

No PowerShell, a partir da raiz do repositório:

```powershell
start .\html-css\portfolio-pessoal\index.html
```

- `start` pede ao Windows para abrir o arquivo;
- o caminho indica a localização do `index.html`;
- o navegador padrão é utilizado.

---

## 32. Fluxo do Git

### Verificar alterações

```bash
git status
```

Exibe arquivos modificados, novos ou preparados para um commit.

### Preparar somente o portfólio

```bash
git add html-css/portfolio-pessoal
```

Adiciona a pasta indicada à área de preparação.

### Criar o commit do projeto

```bash
git commit -m "feat: adiciona portfólio pessoal em HTML e CSS"
```

- `git commit` registra uma versão;
- `-m` permite escrever a mensagem;
- `feat` indica a adição de uma funcionalidade.

### Enviar ao GitHub

```bash
git push origin main
```

- `push` envia os commits;
- `origin` é o nome do repositório remoto;
- `main` é a branch principal.

---

## Resumo

```text
HTML → organiza e atribui significado ao conteúdo
CSS  → controla aparência, espaçamento e layout
ID   → identifica um elemento específico
Class → identifica elementos que compartilham estilos
Div   → agrupa elementos
Flexbox → organiza elementos em linha ou coluna
Media query → adapta o layout a diferentes telas
Git → registra e envia as alterações ao GitHub
```