-- Entre no banco de dados sakila e siga as instruções (e guarde as queries para conferir posteriormente):
USE sakila;

-- 1. Precisamos identificar o cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2. Precisamos de um relatório dos nomes, em ordem alfabética, dos clientes que não estão mais ativos no nosso
-- sistema e pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado.
SELECT first_name FROM customer WHERE active IS FALSE AND store_id = 2 AND first_name <> 'KENNETH' ORDER BY first_name;

-- 3. O setor financeiro quer saber nome, descrição, ano de lançamento e quais são os 100 filmes com o maior custo
-- de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo
-- mínimo de substituição de $18,00 dólares.
SELECT title, description, release_year FROM film WHERE rating IN ('G', 'PG', 'PG-113') AND replacement_cost >= 18 ORDER BY replacement_cost DESC LIMIT 100;

-- 4. Quantos clientes estão ativos e na loja 1?
SELECT COUNT(*) FROM customer WHERE active IS TRUE AND store_id = 1;

-- 5. Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
SELECT * FROM customer WHERE active IS TRUE AND store_id = 1;

-- 6. Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de aluguel,
-- para que possamos fazer uma divulgação melhor desses filmes.
SELECT * FROM film WHERE rating IN ('R', 'NC-17') ORDER BY rental_rate LIMIT 50;

-- Você vai se deparar também com casos em que você só tem parte de uma informação, ou em que precisa criar queries mais
-- dinâmicas. Para esses casos, temos o LIKE . Como assim? É o que veremos a seguir.