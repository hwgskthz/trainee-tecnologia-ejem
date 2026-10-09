# 📚 Anotações — React e Next.js

Conceitos utilizados na atividade do restaurante Sabor da Casa, durante o Trainee de Tecnologia da EJEM.

## ⚛️ React

Biblioteca JavaScript utilizada para construir interfaces com componentes.

No projeto, organiza a página e atualiza o cardápio quando uma categoria é selecionada.

## 🚀 Next.js

Framework baseado em React que oferece recursos para organizar páginas e desenvolver aplicações web.

Arquivos utilizados:

- `app/page.js`: conteúdo da página inicial.
- `app/layout.js`: estrutura principal, idioma, título e descrição.
- `app/globals.css`: estilos da página.
- `public/`: arquivos públicos, como a imagem do restaurante.

## 🧩 Componentes

São partes da interface que podem ser reutilizadas.

Componentes utilizados:

- `Home`: organiza o conteúdo da página.
- `RootLayout`: define a estrutura principal.
- `Prato`: apresenta cada item do cardápio.

## 📦 Props

São dados passados de um componente para outro.

O componente `Prato` recebe nome, descrição, preço e categoria:

```jsx
<Prato
  nome="Frango da casa"
  descricao="Frango grelhado com arroz, feijão e salada."
  preco="R$ 32,00"
  categoria="Principais"
/>
```

Assim, o mesmo componente pode apresentar pratos diferentes.

## 🔄 useState

Guarda um estado do componente. Quando esse estado muda, o React atualiza a interface.

```jsx
const [filtro, setFiltro] = useState("Todos");
```

- `filtro`: categoria selecionada.
- `setFiltro`: função que altera a categoria.
- `"Todos"`: valor inicial.

## 🖱️ onClick

Executa uma ação quando o usuário clica em um elemento.

```jsx
onClick={() => setFiltro(categoria)}
```

No projeto, muda a categoria selecionada no cardápio.

## 🔎 filter() e map()

- `filter()`: seleciona os pratos da categoria escolhida.
- `map()`: cria um componente `Prato` para cada item selecionado.
- `key`: identifica cada item da lista para o React.

## 💻 "use client"

Diretiva utilizada no início de `app/page.js`.

Permite usar recursos interativos no navegador, como `useState` e eventos de clique.

## 🎨 CSS

Recursos utilizados:

- `flex`: alinhamento dos elementos.
- `grid`: organização das seções e dos pratos.
- `gap`: espaçamento entre elementos.
- `border-radius`: bordas arredondadas.
- `clamp()`: tamanho do título adaptável, com limites mínimo e máximo.
- `scroll-behavior`: rolagem suave entre as seções.

## 📱 Responsividade

A media query adapta o site para telas menores:

```css
@media (max-width: 750px) {
  .lista-pratos {
    grid-template-columns: 1fr;
  }
}
```

Nesse exemplo, o cardápio passa a ter uma coluna.

## ✨ Animações

- `@keyframes`: define a animação de entrada.
- `transition`: suaviza mudanças de estilo.
- `:hover`: aplica efeitos ao passar o mouse.
- `translateY()`: desloca o elemento verticalmente.

## 🖼️ Lucide React

Biblioteca de ícones utilizada no projeto.

```jsx
import { Utensils, MapPin, Mail, Clock } from "lucide-react";
```

## ♿ Acessibilidade

- `lang="pt-BR"`: informa o idioma da página.
- `aria-label`: fornece nomes acessíveis.
- `aria-pressed`: indica o filtro selecionado.
- `:focus-visible`: destaca elementos ao navegar pelo teclado.
- `prefers-reduced-motion`: respeita a preferência por menos animações.

## 🛠️ Node.js e npm

- Node.js: executa JavaScript fora do navegador e as ferramentas do projeto.
- npm: gerencia as dependências.
- `npm install`: instala as dependências.
- `npm run dev`: inicia o servidor de desenvolvimento.
- `Ctrl + C`: encerra o servidor.

No PowerShell, foi utilizado `npm.cmd` para evitar o bloqueio do arquivo `npm.ps1`.

## 📂 Git e GitHub

O `.gitignore` impede o envio de pastas geradas automaticamente, como:

- `node_modules/`
- `.next/`

O `package.json` registra as dependências e os comandos do projeto.

O `package-lock.json` registra as versões resolvidas durante a instalação.