//as props são os dados recebidos da página para cada prato
export default function Prato({ nome, descricao, preco, categoria }) {
  return (
    <article className="prato">
      <span className="categoria">{categoria}</span>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong>{preco}</strong>
    </article>
  );
}
