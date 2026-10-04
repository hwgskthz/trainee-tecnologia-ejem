# Banco de Dados e SQL

Anotações sobre modelagem de banco de dados e SQL durante o desenvolvimento da atividade de uma loja de jogos.

---

## 1. Modelagem de banco de dados

### Modelo conceitual (MER)

Representa as entidades, seus atributos e os relacionamentos entre elas.

Nesta atividade, foram utilizadas três entidades:

- Clientes.
- Produtos.
- Pedidos.

No modelo conceitual, os vínculos entre entidades são representados pelos relacionamentos. As chaves estrangeiras são acrescentadas no modelo relacional.

### Cardinalidade

Indica quantas ocorrências de uma entidade podem participar de um relacionamento.

- **(0,1):** nenhuma ou uma.
- **(1,1):** exatamente uma.
- **(0,N):** nenhuma ou várias.
- **(1,N):** uma ou várias.

Na atividade:

- Um cliente pode ter nenhum ou vários pedidos.
- Cada pedido pertence a um cliente.
- Um produto pode aparecer em nenhum ou vários pedidos.
- Cada pedido está associado a um produto.

Esse esquema considera um produto por registro de pedido. Para representar vários produtos no mesmo pedido, seria necessária uma tabela de itens do pedido.

### Modelo lógico ou relacional

Organiza as entidades em tabelas, definindo suas colunas, tipos de dados e chaves.

- **PK — Primary Key:** chave primária que identifica cada registro de forma única e não aceita NULL.
- **FK — Foreign Key:** chave estrangeira que referencia uma chave de outra tabela.

---

## 2. Ferramentas utilizadas

- **brModelo:** criação dos modelos conceitual e lógico.
- **PostgreSQL:** armazenamento dos dados e execução dos comandos SQL.
- **Visual Studio Code:** edição do código.
- **SQLTools e driver PostgreSQL:** conexão entre o VS Code e o banco de dados.

A extensão permite acessar o banco pelo editor, mas o servidor PostgreSQL precisa estar instalado e em execução.

---

## 3. Criação das tabelas

O comando `CREATE TABLE` cria uma tabela e define suas colunas.

```sql
CREATE TABLE clientes (
    codigo_cli INTEGER PRIMARY KEY,
    nome VARCHAR(100),
    cidade VARCHAR(100)
);
```

### Tipos de dados utilizados

| Tipo | Utilização |
| --- | --- |
| INTEGER | Números inteiros, como códigos e quantidades |
| VARCHAR(100) | Textos com até 100 caracteres |
| DECIMAL(10,2) | Números com até 10 dígitos no total, sendo 2 casas decimais |

### Chaves estrangeiras

O comando `REFERENCES` indica a tabela e a coluna referenciadas.

```sql
codigo_cli INTEGER REFERENCES clientes(codigo_cli)
```

Nesse exemplo, o código do cliente em pedidos deve corresponder a um cliente existente.

As tabelas clientes e produtos são criadas antes de pedidos, pois pedidos referencia essas tabelas.

---

## 4. Inserção de dados

O comando `INSERT INTO` adiciona registros a uma tabela.

```sql
INSERT INTO clientes (codigo_cli, nome, cidade)
VALUES
    (1, 'Ana', 'São Paulo'),
    (2, 'Bruno', 'Rio de Janeiro');
```

Ao inserir várias linhas, os registros são separados por vírgulas. O ponto e vírgula encerra o comando.

---

## 5. Consultas com SELECT

O comando `SELECT` define quais informações serão exibidas, enquanto `FROM` indica a tabela consultada.

```sql
SELECT nome, cidade
FROM clientes;
```

Para mostrar todas as colunas:

```sql
SELECT *
FROM clientes;
```

Uma consulta apresenta um resultado sem alterar os dados armazenados.

---

## 6. Filtros e ordenação

### WHERE

Filtra as linhas de acordo com uma condição.

```sql
WHERE categoria = 'RPG'
```

- `=` significa igual.
- `<>` significa diferente.
- `>` significa maior.
- `<` significa menor.

### ORDER BY

Ordena os resultados.

- `ASC`: ordem crescente, utilizada por padrão.
- `DESC`: ordem decrescente.

```sql
SELECT nome_prod, preco
FROM produtos
WHERE categoria = 'RPG'
ORDER BY preco DESC;
```

Essa consulta lista os produtos RPG do mais caro para o mais barato.

O ponto e vírgula fica no final da consulta, depois de todas as cláusulas.

---

## 7. Junção de tabelas

As junções combinam informações de tabelas relacionadas no resultado de uma consulta. Não é necessário criar uma nova tabela para mostrar esses dados juntos.

### ON

Define a condição usada para relacionar as linhas.

```sql
ON clientes.codigo_cli = pedidos.codigo_cli
```

A escrita `tabela.coluna` identifica de qual tabela vem uma coluna.

### INNER JOIN

Mostra apenas as linhas que possuem correspondência nas duas partes da junção.

### LEFT JOIN

Preserva todas as linhas da parte à esquerda, mesmo quando não existe correspondência à direita.

```sql
SELECT clientes.nome, pedidos.codigo_pedi
FROM clientes
LEFT JOIN pedidos
    ON clientes.codigo_cli = pedidos.codigo_cli;
```

Assim, os clientes sem pedidos também aparecem. Para eles, o código do pedido aparece como `NULL`.

### RIGHT JOIN

Preserva todas as linhas da parte à direita, mesmo quando não existe correspondência à esquerda.

### Junção de três tabelas

```sql
SELECT clientes.nome, pedidos.codigo_pedi, produtos.nome_prod
FROM clientes
LEFT JOIN pedidos
    ON clientes.codigo_cli = pedidos.codigo_cli
LEFT JOIN produtos
    ON pedidos.codigo_prod = produtos.codigo_prod;
```

Primeiro, os clientes são associados aos seus pedidos. Depois, cada pedido é associado ao produto comprado.

---

## 8. Funções de agregação

As funções de agregação calculam resultados a partir de várias linhas.

- **SUM:** soma valores.
- **AVG:** calcula a média.
- **COUNT:** conta linhas ou valores, dependendo do argumento.

### Total gasto

Para calcular o gasto de um cliente, multiplicamos o preço pela quantidade e somamos os valores:

```sql
SUM(produtos.preco * pedidos.quantidade)
```

### Contagem de pedidos

```sql
COUNT(pedidos.codigo_pedi)
```

Conta os códigos de pedidos preenchidos, ignorando valores `NULL`.

Com `LEFT JOIN`, isso permite mostrar zero para um produto sem pedidos. Usar `COUNT(*)` contaria também a linha preservada pela junção, mesmo sem pedido correspondente.

Contar pedidos é diferente de somar a quantidade de unidades compradas.

---

## 9. Agrupamento com GROUP BY

O comando `GROUP BY` reúne linhas para calcular resultados por cliente, produto ou categoria.

```sql
SELECT categoria, AVG(preco) AS preco_medio
FROM produtos
GROUP BY categoria;
```

Essa consulta calcula uma média para cada categoria.

Ao agrupar clientes, utilizar o código e o nome evita reunir clientes diferentes que tenham o mesmo nome.

### AS

Define um nome para uma coluna do resultado.

```sql
SUM(produtos.preco * pedidos.quantidade) AS preco_gasto
```

Nesse exemplo, a coluna calculada aparece com o nome `preco_gasto`.

---

## 10. Diferença entre WHERE e HAVING

- **WHERE:** filtra as linhas antes do agrupamento.
- **HAVING:** filtra os grupos após os cálculos das agregações.

```sql
SELECT categoria, AVG(preco) AS preco_medio
FROM produtos
GROUP BY categoria
HAVING AVG(preco) > 100;
```

A consulta mostra apenas as categorias cuja média de preço é maior que 100.

---

## 11. Arredondamento com ROUND

O comando `ROUND` arredonda um valor para a quantidade de casas decimais indicada.

```sql
ROUND(AVG(preco), 2) AS preco_medio
```

Nesse exemplo, a média é arredondada para duas casas decimais.

---

## 12. NULL

`NULL` representa a ausência de um valor.

Na consulta de gasto por cliente, um cliente sem pedidos permanece no resultado devido ao `LEFT JOIN`, e seu total aparece como `NULL`.

Esse comportamento foi mantido na atividade.

---

## 13. Comentários e execução

Comentários de uma linha começam com `--`.

```sql
-- Ex. 2: lista os produtos RPG do mais caro para o mais barato.
```

O script pode reunir a criação das tabelas, a inserção dos dados e as consultas, separando cada parte com comentários.

Os comandos de criação e inserção devem ser executados uma vez. Depois, é possível selecionar e executar apenas as consultas desejadas.

---

## 14. Como organizar o raciocínio de uma consulta

1. Quais informações quero mostrar? → `SELECT`.
2. De quais tabelas elas vêm? → `FROM` e `JOIN`.
3. Como as tabelas se relacionam? → `ON`.
4. Quais linhas quero filtrar? → `WHERE`.
5. Preciso calcular resultados por grupo? → agregação e `GROUP BY`.
6. Quais grupos quero mostrar? → `HAVING`.
7. Como quero ordenar? → `ORDER BY`.