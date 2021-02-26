-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de 
--    pagamentos feitos até o momento por um determinado customer_id .
DELIMITER $$

CREATE FUNCTION total_payments(customerID INT)
RETURNS DOUBLE READS SQL DATA
BEGIN
    DECLARE payment_sum DOUBLE;
    SELECT SUM(amount) FROM sakila.payment WHERE customer_id = customerID INTO payment_sum;
    RETURN payment_sum;
END $$

DELIMITER ;

SELECT total_payments(2);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme
--    vinculado ao registro de inventário com esse id.
DELIMITER $$

CREATE FUNCTION filmByInventoryID(inventoryID INT)
RETURNS VARCHAR(200)
READS SQL DATA
BEGIN
    DECLARE title VARCHAR(200);
    SELECT film.title FROM sakila.inventory AS inventory
	INNER JOIN sakila.film AS film
	ON film.film_id = inventory.film_id
	WHERE inventory_id = inventoryID
    INTO title;
    RETURN title;
END $$

DELIMITER ;

SELECT filmByInventoryID(9);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto
--    (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria
DELIMITER $$

CREATE FUNCTION returnCategoryID(categoryName VARCHAR(30))
RETURNS INT
READS SQL DATA
BEGIN
    DECLARE id VARCHAR(200);
    SELECT category_id FROM sakila.category AS category
	WHERE category.name = categoryName
    INTO id;
    RETURN id;
END $$

DELIMITER ;

SELECT returnCategoryID('Animation');

DELIMITER $$

CREATE FUNCTION returnQtdFilmsByCategoryName(categoryName VARCHAR(30))
RETURNS INT
READS SQL DATA
BEGIN
	DECLARE categoryID, qtd INT;
    SELECT returnCategoryID(categoryName) INTO categoryID;
    SELECT COUNT(*) FROM sakila.film AS film
	INNER JOIN sakila.film_category AS film_category
	ON film.film_id = film_category.film_id
	WHERE film_category.category_id = categoryID
    INTO qtd;
    RETURN qtd;
END $$

DELIMITER ;

SELECT returnQtdFilmsByCategoryName('Action');
SELECT returnQtdFilmsByCategoryName('Animation');