-- criação das tabelas
CREATE TABLE clientes (
 codigo_cli INTEGER PRIMARY KEY,
 nome VARCHAR(100),
 cidade VARCHAR(100)  
);

CREATE TABLE produtos (
    codigo_prod INTEGER PRIMARY KEY,
    nome_prod VARCHAR(100),
    preco DECIMAL(10,2),
    categoria VARCHAR(100)
);

CREATE TABLE pedidos (
    codigo_pedi INTEGER PRIMARY KEY,
    quantidade INTEGER,
    codigo_cli INTEGER REFERENCES clientes(codigo_cli),
    codigo_prod INTEGER REFERENCES produtos(codigo_prod)
);

-- inserção dos dados
INSERT INTO clientes(codigo_cli, nome, cidade)
VALUES
    (1, 'Ana', 'São Paulo'),
    (2, 'Bruno', 'Rio de Janeiro'),
    (3, 'Carla', 'São Paulo'),
    (4, 'Diego', 'Belo Horizonte'),
    (5, 'Thomas', 'São Paulo');

INSERT INTO produtos(codigo_prod, nome_prod, preco, categoria)
VALUES
    (1, 'Elden Ring', 249.90, 'RPG'),
    (2, 'Minecraft', 99.90, 'Sandbox'),
    (3, 'Hollow Knight', 46.99, 'Aventura'),
    (4, 'GTA V', 79.90, 'Aventura'),
    (5, 'Cyberpunk 2077', 199.90, 'RPG');

INSERT INTO pedidos(codigo_pedi, codigo_cli, codigo_prod, quantidade)
VALUES
    (1, 1, 1, 2),
    (2, 1, 3, 1),
    (3, 2, 5, 1),
    (4, 3, 1, 3),
    (5, 3, 2, 2),
    (6, 5, 4, 1),
    (7, 5, 3, 4);

SELECT * FROM clientes;
SELECT * FROM produtos;
SELECT * FROM pedidos;

-- ex 2: lista o nome e o preço dos produtos RPG, do mais caro para o mais barato
SELECT nome_prod, preco 
FROM produtos 
WHERE categoria = 'RPG'
ORDER BY preco DESC;

-- ex 3: mostra todos os clientes, seus pedidos e os produtos comprados
SELECT clientes.nome, pedidos.codigo_pedi, produtos.nome_prod
FROM clientes
LEFT JOIN pedidos
ON clientes.codigo_cli = pedidos.codigo_cli
LEFT JOIN produtos
ON pedidos.codigo_prod = produtos.codigo_prod;

-- ex 4: calcula o total gasto por cliente, somando preço*quantidade
SELECT clientes.nome,
    SUM(produtos.preco*pedidos.quantidade) AS preco_gasto
FROM clientes
LEFT JOIN pedidos
ON clientes.codigo_cli = pedidos.codigo_cli
LEFT JOIN produtos
ON pedidos.codigo_prod = produtos.codigo_prod
GROUP BY clientes.codigo_cli, clientes.nome;

-- ex 5: calcula a média de preço por categoria, arredonda para duas casas
SELECT categoria, ROUND(AVG(preco), 2) AS preco_medio
FROM produtos
GROUP BY categoria
HAVING AVG(preco)>100;

-- ex 6: conta os pedidos de cada produto
SELECT produtos.nome_prod,
    COUNT(pedidos.codigo_pedi) AS total_pedidos
FROM produtos
LEFT JOIN pedidos
ON pedidos.codigo_prod = produtos.codigo_prod
GROUP BY produtos.codigo_prod, produtos.nome_prod;