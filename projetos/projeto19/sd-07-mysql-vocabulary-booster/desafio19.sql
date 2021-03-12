-- Crie uma função chamada exibir_quantidade_pessoas_contratadas_por_mes_e_ano no banco de dados hr que, dados o mês
-- e ano como parâmetros nessa ordem, retorna a quantidade de pessoas funcionárias que foram contratadas nesse mês e ano.
-- Confirme que sua função retorna o valor 14 ao ser chamada passando os números 6 e 1987 para mês e ano, respectivamente.

USE hr;
DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes INT, ano INT)
RETURNS INT 
READS SQL DATA
BEGIN
    DECLARE contador INT;
    SELECT
        COUNT(*) AS `Número de pessoas contratadas`
    FROM hr.employees AS employees
    WHERE MONTH(employees.HIRE_DATE) = mes AND YEAR(employees.HIRE_DATE) = ano
    INTO contador;
    RETURN contador;
END $$

DELIMITER ;
