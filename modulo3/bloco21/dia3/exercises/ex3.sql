-- 1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao
--    para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1.
DELIMITER $$

CREATE TRIGGER insertCurrentDate
BEFORE INSERT ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN
    SET NEW.data_Atualizacao = NOW(),
		NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

INSERT INTO betrybe_automoveis.carros (preco, acao) VALUES ('2500', 'a');

SELECT * FROM betrybe_automoveis.carros;

-- 2. Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao
--    para o momento do ocorrido e a acao para 'ATUALIZAÇÃO'.
DELIMITER $$

CREATE TRIGGER updateData
BEFORE UPDATE ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN
    SET NEW.data_Atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;

-- 3. Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações
--    do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
DELIMITER $$

CREATE TRIGGER deleteTableTrigger
AFTER DELETE ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN
    INSERT INTO betrybe_automoveis.log_operacoes (tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;

DELETE FROM betrybe_automoveis.carros WHERE id_carro = 1;
