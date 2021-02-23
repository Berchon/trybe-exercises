-- 1. Insira um novo funcionário na tabela sakila.staff .
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
VALUES ('Joe', 'Doe', 5, 2, 'Joe');

-- 2. Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector".
--    Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados
--    automaticamente não precisam ser inseridos manualmente. Boa explorada!

-- 3. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES 
('Pedro', 'Santos', 6, 1, 'Pedro'),
('Joao', 'Silva', 7, 2, 'Joao');
    
-- 4. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, email, active, last_update, username)
	SELECT first_name, last_name, address_id, store_id, email, active, last_update, first_name
    FROM sakila.customer LIMIT 5;

-- 5. Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category (name) VALUES ('categ-1'), ('categ-2'), ('categ-3');

-- 6. Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES (3, 3);
