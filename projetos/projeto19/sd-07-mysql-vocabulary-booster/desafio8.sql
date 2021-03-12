-- Exiba todas as pessoas consumidoras cujos pedidos já foram enviados pelas empresas "Speedy Express" ou "United Package".
-- Use o banco w3schools como referência
-- Monte uma query que exiba 03 colunas:
--      1. A primeira deve possuir o alias "Nome de contato" e exibir o nome de contato da pessoa consumidora.
--      2. A segunda deve possuir o alias "Empresa que fez o envio" e exibir o nome da empresa que efetuou o envio do pedido.
--      3. A terceira deve possuir o alias "Data do pedido" e exibir a data que o pedido foi feito.
-- Seus resultados devem estar ordenados pelo nome de contato da pessoa consumidora em ordem alfabética.
-- Em caso de empate no nome de contato, ordene os resultados pelo nome da empresa que fez o envio do produto em ordem alfabética.
-- Se houver empresas com o mesmo nome, ordene os resultados pela data do pedido em ordem crescente.

SELECT
    customer.ContactName AS `Nome de contato`,
    shippers.ShipperName AS `Empresa que fez o envio`,
    DATE(orders.OrderDate) AS `Data do pedido`
FROM w3schools.orders AS orders
INNER JOIN w3schools.customers AS customer
ON orders.CustomerID = customer.CustomerID
INNER JOIN w3schools.shippers AS shippers
ON orders.ShipperID = shippers.ShipperID
HAVING `Empresa que fez o envio` = 'Speedy Express' OR `Empresa que fez o envio` = 'United Package'
ORDER BY `Nome de contato` ASC, `Empresa que fez o envio` ASC, `Data do pedido`;
