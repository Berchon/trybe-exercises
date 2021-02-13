-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
SELECT CONCAT(title, ', ', release_year,  ' - ', rating) FROM sakila.film;

-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados no banco sakila .
SELECT DISTINCT (last_name) FROM sakila.actor;

-- Crie queries para descobrir o seguinte:
-- 1. Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM sakila.film;

-- 2. Quantos clientes temos registrados?
SELECT COUNT(*) FROM sakila.customer;

-- 3. Quantos sobrenomes únicos temos no banco de dados?
SELECT DISTINCT actor.last_name, customer.last_name FROM sakila.actor, sakila.customer;
			-- SELECT DISTINCT TABLE_NAME
			-- 	FROM INFORMATION_SCHEMA.COLUMNS
			-- 	WHERE COLUMN_NAME LIKE 'last_name'
			-- 	AND TABLE_SCHEMA='sakila';

-- 4. Quantas categorias de filmes o banco sakila possui?
SELECT COUNT(*) FROM sakila.film_category;

-- 5. Quantos países são atendidos pela sakila?
SELECT COUNT(*) FROM sakila.country;

-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english .
SELECT * FROM sakila.language WHERE name != 'English';

-- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , 
-- incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de 
-- substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

SELECT TITLE, release_year, rental_duration, rating, replacement_cost FROM sakila.film 
ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 3;