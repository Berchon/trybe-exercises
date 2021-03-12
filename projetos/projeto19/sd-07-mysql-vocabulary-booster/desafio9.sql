-- Exiba todas as pessoas funcionárias que já realizaram algum pedido e o total dos pedidos feitos.
-- Use o banco w3schools como referência
-- Monte uma query que exiba 02 colunas:
--      1. A primeira deve possuir o alias "Nome completo" e exibir o nome completo da pessoa funcionária (não se esqueça do espaço entre o nome e o sobrenome).
--      2. A segunda deve possuir o alias "Total de pedidos" e exibir a quantidade total de pedidos feitos pela pessoa.
-- Ordene seus resultados pelo total de pedidos em ordem crescente.

SELECT
    CONCAT(employees.FirstName, ' ', employees.LastName) AS `Nome completo`,
    COUNT(*) AS `Total de pedidos`
FROM w3schools.orders AS orders
INNER JOIN w3schools.employees AS employees
ON orders.EmployeeID = employees.EmployeeID
INNER JOIN w3schools.customers AS customer
ON orders.CustomerID = customer.CustomerID
GROUP BY `Nome completo`
ORDER BY `Total de pedidos` ASC;
