SELECT nome FROM faculdade.biblioteca;
SELECT COUNT(*) FROM faculdade.biblioteca;
SELECT * FROM faculdade.biblioteca LIMIT 2 OFFSET 2;
SELECT * FROM faculdade.biblioteca ORDER BY ano_lancamento DESC, nome ASC;
SELECT * FROM faculdade.biblioteca ORDER BY quantidade DESC LIMIT 1;
SELECT * FROM faculdade.biblioteca ORDER BY vendas DESC LIMIT 4;