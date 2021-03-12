-- Obtenha informações a respeito dos salários das pessoas empregadas.
-- Use o banco hr como referência
-- Crie uma query que exiba 03 colunas:
-- 		1. A primeira deve possuir o alias "Cargo" e exibir o nome do cargo.
-- 		2. A segunda deve possuir o alias "Média salarial" e exibir a média dos salários das pessoas empregadas que possuem o cargo em questão.
-- 		3. A terceira deve possuir o alias "Senioridade" e categorizar o nível de senioridade do cargo com base na média salarial, da seguinte forma:
-- 			Média salarial entre 2000 - 5800 -> Júnior
-- 			Média salarial entre 5801 - 7500 -> Pleno
-- 			Média salarial entre 7501 - 10500 -> Sênior
-- 			Média salarial acima de 10500 -> CEO
-- Sempre que fizer uso da média salarial, arredonde o valor para 02 casas decimais.
-- Os resultados devem estar ordenados pela média salarial em ordem crescente.
-- Em caso de empate na média, os resultados devem ser ordenados pelo nome do cargo em ordem alfabética.

SELECT
group_jobs.Cargo,
group_jobs.`Média salarial`,
CASE
WHEN group_jobs.`Média salarial` <= 5800 THEN 'Júnior'
WHEN group_jobs.`Média salarial` <= 7500 AND group_jobs.`Média salarial` > 5800 THEN 'Pleno'
WHEN group_jobs.`Média salarial` <= 10500 AND group_jobs.`Média salarial` > 7500 THEN 'Sênior'
ELSE 'CEO'
END AS 'Senioridade'
FROM (
SELECT
jobs.JOB_TITLE AS 'Cargo',
ROUND(AVG(employees.SALARY), 2) AS `Média salarial`
FROM hr.jobs AS jobs
INNER JOIN hr.employees AS employees
ON jobs.JOB_ID = employees.JOB_ID
GROUP BY employees.JOB_ID
) AS group_jobs
ORDER BY group_jobs.`Média salarial` ASC, group_jobs.Cargo ASC;
