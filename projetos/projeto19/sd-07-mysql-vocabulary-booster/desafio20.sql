-- Toda pessoa funcionária no banco hr possui um histórico completo de cargos. Logo, crie uma procedure chamada
-- exibir_historico_completo_por_funcionario que, dado o e-mail de uma pessoa funcionária, retorna todos os cargos
-- em seu histórico. Sua procedure deve retornar três colunas:
-- 1. A primeira coluna deve possuir o alias "Nome completo" e exibir o nome completo da pessoa funcionária (não se esqueça do espaço entre o nome e o sobrenome).
-- 2. A segunda coluna deve possuir o alias "Departamento" e exibir o departamento que a pessoa já fez parte.
-- 3. A terceira coluna deve possuir o alias "Cargo" e exibir cargo que a pessoa já ocupou.
-- Os resultados devem estar ordenados pelo nome do departamento em ordem alfabética. Em caso de empate no nome do departamento,
-- ordene os resultados pelo nome do cargo em ordem alfabética.
-- Confirme a execução correta da procedure, chamando-a e passando o email "NKOCHHAR":
-- CALL exibir_historico_completo_por_funcionario('NKOCHHAR');
-- Chamando-a dessa forma, sua procedure deve mostrar que a pessoa funcionária Neena Kochhar teve dois cargos em seu histórico:
-- um como Accounting Manager no departamento Accounting e o outro como Public Accountant no departamento Accounting, nessa ordem.

USE hr;

DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email VARCHAR(50))
BEGIN
    SELECT
    CONCAT(employees.FIRST_NAME, ' ', employees.LAST_NAME) AS `Nome completo`,
    departments.DEPARTMENT_NAME AS 'Departamento',
    jobs.JOB_TITLE AS 'Cargo'
FROM hr.job_history AS job_history
INNER JOIN hr.employees AS employees
ON job_history.EMPLOYEE_ID = employees.EMPLOYEE_ID
INNER JOIN hr.departments AS departments
ON job_history.DEPARTMENT_ID = departments.DEPARTMENT_ID
INNER JOIN hr.jobs AS jobs
ON job_history.JOB_ID = jobs.JOB_ID
WHERE employees.EMAIL = email
ORDER BY Departamento ASC, Cargo ASC;
END $$

DELIMITER ;
