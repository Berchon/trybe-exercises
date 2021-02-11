SELECT * FROM sakila.film;
SELECT CONCAT(title, ', ', release_year,  ' - ', rating) FROM sakila.film;
SELECT DISTINCT (last_name) FROM sakila.actor;
SELECT COUNT(*) FROM sakila.film;
SELECT DISTINCT actor.last_name, customer.last_name FROM sakila.actor, sakila.customer;

SELECT DISTINCT TABLE_NAME
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME LIKE 'last_name'
AND TABLE_SCHEMA='sakila';

SELECT COUNT(*) FROM sakila.film_category;
SELECT COUNT(*) FROM sakila.country;
SELECT *FROM sakila.language WHERE name != 'English';
SELECT TITLE, release_year, rental_duration, rating, replacement_cost FROM sakila.film 
ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 20;