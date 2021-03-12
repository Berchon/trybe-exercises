-- Considere os salários máximo e mínimo de um cargo como salários anuais.
-- Use o banco hr como referência
-- Crie uma query que exiba 04 colunas:
-- 		1. A primeira deve possuir o alias "Cargo" e exibir o nome do cargo.
-- 		2. A segunda deve possuir o alias "Variação Salarial" e exibir a diferença entre os salários máximo e mínimo daquele cargo.
-- 		3. A terceira deve possuir o alias "Média mínima mensal" e exibir o salário mínimo mensal daquele cargo. Arredonde a média
-- 			com uma precisão de duas casas decimais.
-- 		4. A quarta deve possuir o alias "Média máxima mensal" e exibir o salário máximo mensal daquele cargo. Arredonde a média com
-- 			uma precisão de duas casas decimais.
-- Os resultados devem estar ordenados pela variação salarial em ordem crescente.
-- Em caso de empate na variação, os resultados devem ser ordenados pelo nome do cargo em ordem alfabética.

SELECT
jobs.JOB_TITLE AS 'Cargo',
jobs.MAX_SALARY - jobs.MIN_SALARY AS `Variação Salarial`,
ROUND(jobs.MIN_SALARY / 12, 2) AS `Média mínima mensal`,
ROUND(jobs.MAX_SALARY / 12, 2) AS `Média máxima mensal`
FROM hr.jobs AS jobs
INNER JOIN hr.employees AS employees
ON jobs.JOB_ID = employees.JOB_ID
GROUP BY jobs.JOB_ID
ORDER BY `Variação Salarial` ASC, Cargo ASC;
