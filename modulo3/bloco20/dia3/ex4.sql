USE sakila;
-- 1. Quantos aluguéis temos com a data de retorno 2005-08-29 ? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT COUNT(*) FROM rental WHERE DATE(return_date) = '2005-08-29';

-- 2. Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005 ?
SELECT COUNT(*) FROM rental WHERE DATE(rental_date) BETWEEN '2005-07-01' AND '2005-08-22';

-- 3. Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
SELECT
	DATE(rental_date),
    YEAR(rental_date),
    MONTH(rental_date),
    DAY(rental_date),
    HOUR(rental_date),
    MINUTE(rental_date),
    SECOND(rental_date)
	FROM rental 
	WHERE rental_id = 10330;
    
-- 4. Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
SELECT rental_id, rental_date FROM rental WHERE rental_date = '2005-08-18 00:14:03';