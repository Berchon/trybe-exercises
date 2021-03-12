-- Categorize o nível de remuneração de cada cargo.
-- Use o banco hr como referência
-- Seu relatório deve possuir as seguintes colunas:
--     1. A primeira deve possuir o alias "Cargo" e exibir o nome do cargo.
--     2. A segunda deve possuir o alias "Nível" e exibir o nível de remuneração do cargo com base no seu salário máximo, categorizando 
-- 		  os níveis de remuneração da seguinte forma:
-- 			* Salário máximo entre 5000 e 10000 -> Baixo
-- 			* Salário máximo entre 10001 e 20000 -> Médio
-- 			* Salário máximo entre 20001 e 30000 -> Alto
-- 			* Salário máximo acima de 30000 -> Altíssimo
-- Os resultados devem estar ordenados pelo nome do cargo em ordem alfabética.

SELECT
JOB_TITLE AS 'Cargo',
CASE
WHEN MAX_SALARY <=10000 THEN 'Baixo'
WHEN MAX_SALARY > 10000 AND MAX_SALARY <= 20000 THEN 'Médio'
WHEN MAX_SALARY > 20000 AND MAX_SALARY <= 30000 THEN 'Alto'
ELSE 'Altíssimo'
END AS 'Nível'
FROM hr.jobs
ORDER BY JOB_TITLE;
