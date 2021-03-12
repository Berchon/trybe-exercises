-- Crie uma função chamada buscar_quantidade_de_empregos_por_funcionario que, ao receber o email de uma pessoa funcionária,
-- retorne a quantidade de empregos presentes em seu histórico.
-- Use o banco hr como referência
-- Confirme que sua função retorna o valor 2 ao ser chamada passando uma pessoa funcionária cujo email é "NKOCHHAR".

USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(50))
RETURNS INT 
READS SQL DATA
BEGIN
    DECLARE total INT;
    SELECT
        COUNT(*) AS total_empregos
    FROM hr.employees AS employees
    INNER JOIN hr.job_history AS job_history
    ON employees.EMPLOYEE_ID = job_history.EMPLOYEE_ID
    WHERE employees.EMAIL = email
    INTO total;
    RETURN total;
END $$

DELIMITER ;
