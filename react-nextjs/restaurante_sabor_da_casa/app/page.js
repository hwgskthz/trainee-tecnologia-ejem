"use client";

import { useState } from "react";
import { Utensils, MapPin, Mail, Clock } from "lucide-react";
import Prato from "../components/Prato";

const pratos = [
  { nome: "Frango da casa", descricao: "Frango grelhado com arroz, feijão e salada.", preco: "R$ 32,00", categoria: "Principais" },
  { nome: "Massa ao molho", descricao: "Espaguete com molho de tomate e manjericão.", preco: "R$ 29,00", categoria: "Principais" },
  { nome: "Risoto de cogumelos", descricao: "Arroz cremoso com cogumelos e parmesão.", preco: "R$ 38,00", categoria: "Principais" },
  { nome: "Pudim caseiro", descricao: "Pudim de leite com calda de caramelo.", preco: "R$ 12,00", categoria: "Sobremesas" },
  { nome: "Brownie", descricao: "Brownie de chocolate com sorvete de baunilha.", preco: "R$ 16,00", categoria: "Sobremesas" },
  { nome: "Suco natural", descricao: "Laranja, limão ou abacaxi. Copo de 300 ml.", preco: "R$ 9,00", categoria: "Bebidas" },
];

export default function Home() {
  // Ao mudar o filtro, o React atualiza os pratos exibidos.
  const [filtro, setFiltro] = useState("Todos");
  const pratosFiltrados = pratos.filter(
    (prato) => filtro === "Todos" || prato.categoria === filtro
  );

  return (
    <>
      <header>
        <a className="marca" href="#inicio"><Utensils size={22} /> Sabor da Casa</a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#contato">Local e contato</a>
        </nav>
      </header>

      <main>
        <section className="inicio" id="inicio">
          <div className="apresentacao">
            <span className="etiqueta">FEITO COM CARINHO</span>
            <h1>Comida boa.<br />Sabor de casa.</h1>
            <p>Uma pausa gostosa no seu dia, com ingredientes frescos e receitas que abraçam.</p>
            <a className="botao" href="#cardapio">Conheça o cardápio</a>
          </div>
          <div className="foto" role="img" aria-label="Ambiente aconchegante de um restaurante" />
        </section>

        <section id="sobre" className="sobre">
          <span className="etiqueta">NOSSA HISTÓRIA</span>
          <h2>Seu lugar à mesa.</h2>
          <p>O Sabor da Casa nasceu da vontade de reunir pessoas em volta de uma boa refeição. Aqui, servimos pratos caseiros em um ambiente acolhedor, para você aproveitar sem pressa.</p>
        </section>

        <section id="cardapio">
          <span className="etiqueta">ESCOLHA SEU FAVORITO</span>
          <h2>Nosso cardápio</h2>
          <div className="filtros" aria-label="Categorias do cardápio">
            {["Todos", "Principais", "Sobremesas", "Bebidas"].map((categoria) => (
              <button key={categoria} className={filtro === categoria ? "ativo" : ""}
                aria-pressed={filtro === categoria} onClick={() => setFiltro(categoria)}>
                {categoria}
              </button>
            ))}
          </div>
          <div className="lista-pratos">
            {pratosFiltrados.map((prato) => (
              <Prato key={prato.nome} nome={prato.nome} descricao={prato.descricao}
                preco={prato.preco} categoria={prato.categoria} />
            ))}
          </div>
        </section>

        <section id="contato" className="contato">
          <div>
            <span className="etiqueta">VENHA NOS VISITAR</span>
            <h2>Vamos compartilhar<br />uma boa refeição?</h2>
            <p>Esperamos você para o almoço!</p>
          </div>
          <div className="informacoes">
            <h3><MapPin size={20} /> Localização</h3>
            <p>Rua do Sabor, 123 — Vila das Flores, São Paulo — SP</p>
            <h3><Clock size={20} /> Horário</h3>
            <p>Segunda a sábado, das 11h às 16h.</p>
            <h3><Mail size={20} /> Contato</h3>
            <a href="mailto:contato@sabordacasa.example">contato@sabordacasa.example</a>
            <p className="aviso">Restaurante fictício. Endereço e contato ilustrativos.</p>
          </div>
        </section>
      </main>

      <footer>Sabor da Casa © 2026 · Projeto acadêmico EJEM</footer>
    </>
  );
}
