-- Exiba os 05 primeiros países distintos dentre as pessoas consumidoras e as empresas fornecedoras, em ordem alfabética.
-- Use o banco w3schools como referência
-- Monte uma query que exiba 01 coluna com o alias "País" contendo o nome do país.

(
    SELECT
        customers.Country AS País
    FROM w3schools.customers AS customers
    GROUP BY customers.Country
    ORDER BY customers.Country
    LIMIT 5
)
UNION
(
    SELECT
        suppliers.Country AS País
    FROM w3schools.suppliers AS suppliers
    GROUP BY suppliers.Country
    ORDER BY suppliers.Country
    LIMIT 5
)
ORDER BY País
LIMIT 5;
