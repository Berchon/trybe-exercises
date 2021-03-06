SELECT product_name FROM northwind.products;
SELECT * FROM northwind.products;
SELECT id from northwind.products;
SELECT COUNT(product_name) FROM northwind.products;
SELECT * FROM northwind.products LIMIT 10 OFFSET 3;
SELECT product_name, id FROM northwind.products ORDER BY product_name ASC;
SELECT id FROM northwind.products ORDER BY id DESC LIMIT 5;
SELECT 5+6 AS 'A', 'de' AS 'Trybe', 2+8 AS 'eh';
SELECT notes FROM northwind.purchase_orders WHERE notes IS NOT NULL;
SELECT * FROM northwind.purchase_orders WHERE created_by >= 3 ORDER BY created_by DESC, id ASC;
SELECT notes FROM northwind.purchase_orders WHERE notes BETWEEN 'Purchase generated based on Order #30' AND 'Purchase generated based on Order #39';
SELECT submitted_date FROM northwind.purchase_orders WHERE DATE(submitted_date) = '2006-04-26';
SELECT supplier_id FROM northwind.purchase_orders WHERE supplier_id IN (1, 3);
SELECT supplier_id FROM northwind.purchase_orders WHERE supplier_id BETWEEN 1 AND 3;
SELECT HOUR(submitted_date) AS 'submitted_hour' FROM northwind.purchase_orders;
SELECT submitted_date AS 'submitted_hour' FROM northwind.purchase_orders WHERE (submitted_date) BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';
SELECT id, supplier_id FROM northwind.purchase_orders WHERE supplier_id IN (1, 3, 5, 7);
SELECT * FROM northwind.purchase_orders WHERE supplier_id = 3 AND status_id = 2;
SELECT COUNT(*) AS 'order_count' FROM northwind.orders WHERE employee_id IN (5, 6) AND shipper_id = 2;