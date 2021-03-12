-- Faça um relatório que mostre o histórico de cargos das pessoas empregadas que iniciaram seus cargos nos meses de janeiro, fevereiro ou março.
-- Use o banco hr como referência
-- Monte uma query que exiba 03 colunas:
--      1. A primeira deve possuir o alias "Nome completo" e exibir o nome completo da pessoa empregada em CAIXA ALTA (não se esqueça do
--          espaço entre o nome e o sobrenome).
--      2. A segunda deve possuir o alias "Data de início" e exibir a data que a pessoa iniciou o cargo.
--      3. A terceira deve possuir o alias "Salário" e exibir o salário da pessoa.
-- Os resultados devem estar ordenados pelo nome completo das pessoas empregadas em ordem alfabética.
-- Em caso de empate no nome completo, ordene os resultados pela data de início que a pessoa iniciou seu cargo, em ordem crescente.

SELECT
    UCASE(CONCAT(employees.FIRST_NAME, ' ', employees.LAST_NAME)) AS `Nome completo`,
    DATE(job_history.START_DATE) AS `Data de início`,
    employees.SALARY AS 'Salário'
FROM hr.job_history AS job_history
INNER JOIN hr.employees AS employees
ON job_history.EMPLOYEE_ID = employees.EMPLOYEE_ID
WHERE MONTH(job_history.START_DATE) IN ('01', '02', '03')
ORDER BY `Nome completo` ASC, `Data de início` ASC;
