-- Faça um relatório que mostra o histórico de cargos das pessoas empregadas.
-- Use o banco hr como referência
-- Monte uma query que exiba 04 colunas:
-- 		1. A primeira deve possuir o alias "Nome completo" e exibir o nome completo da pessoa empregada (não se esqueça do espaço entre o nome e o sobrenome).
-- 		2. A segunda deve possuir o alias "Cargo" e exibir o nome do cargo da pessoa.
-- 		3. A terceira deve possuir o alias "Data de início do cargo" e exibir a data que a pessoa iniciou o cargo.
-- 		4. A quarta deve possuir o alias "Departamento" e mostrar o nome do departamento em que a pessoa exerceu seu cargo.
-- Os resultados devem estar ordenados pelo nome completo das pessoas empregadas em ordem decrescente.
-- Em caso de empate no nome completo, ordene os resultados pelo nome do cargo em ordem alfabética.

SELECT
    CONCAT(employees.FIRST_NAME, ' ', employees.LAST_NAME) AS `Nome completo`,
    jobs.JOB_TITLE AS 'Cargo',
    DATE(job_history.START_DATE) AS `Data de início do cargo`,
    departments.DEPARTMENT_NAME AS 'Departamento'
FROM hr.job_history AS job_history
INNER JOIN hr.employees AS employees
ON job_history.EMPLOYEE_ID = employees.EMPLOYEE_ID
INNER JOIN hr.jobs AS jobs
ON job_history.JOB_ID = jobs.JOB_ID
INNER JOIN hr.departments AS departments
ON job_history.DEPARTMENT_ID = departments.DEPARTMENT_ID
ORDER BY `Nome completo` DESC, Cargo ASC;
