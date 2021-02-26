-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure 
--    não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade
--    de filmes em que atuaram.
DELIMITER $$

CREATE PROCEDURE ShowMostPopularActors()
BEGIN
    SELECT * FROM sakila.actor;
	SELECT film_actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS name_actor, COUNT(*) AS film_number
	FROM sakila.film_actor AS film_actor
	INNER JOIN sakila.actor AS actor
	ON film_actor.actor_id = actor.actor_id
	GROUP BY actor_id
	ORDER BY film_number DESC
	LIMIT 10;
END $$

DELIMITER ;

CALL ShowMostPopularActors();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id
--    do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category
--    e category para montar essa procedure.
DELIMITER $$

CREATE PROCEDURE ShowFilmsByCategory(IN category_name VARCHAR(30))
BEGIN
    SELECT films.film_id, films.title, category.category_id FROM sakila.category AS category
	INNER JOIN (
		SELECT film_category.film_id, film_category.category_id, film.title 
		FROM sakila.film_category AS film_category
		INNER JOIN sakila.film AS film
		ON film.film_id = film_category.film_id
	) AS films
	ON category.category_id = films.category_id
	WHERE name = category_name; 
END $$

DELIMITER ;

CALL ShowFilmsByCategory('Animation');

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo,
--    através de um parâmetro de saída
DELIMITER $$

CREATE PROCEDURE isActive(INOUT email1 VARCHAR(100))
BEGIN
	SELECT
		IF (active, 'Cliente ATIVO', 'Cliente INATIVO')
	FROM sakila.customer
	WHERE email = email1
    INTO email1;
END $$

DELIMITER ;

SELECT 'PATRICIA.JOHNSON@sakilacustomer.org' INTO @email1;
CALL isActive(@email1);

SELECT 'SANDRA.MARTIN@sakilacustomer.org' INTO @email2;
CALL isActive(@email2);

SELECT @email1, @email2;
