DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(usuarioID INT)
RETURNS INT
READS SQL DATA
BEGIN
    DECLARE quantidade INT;
    SELECT
        COUNT(*) AS quantidade_musicas_no_historico
    FROM SpotifyClone.usuarios AS usuarios
    INNER JOIN SpotifyClone.historico AS historico ON usuarios.id = historico.usuarios_id
    WHERE usuarios.id = usuarioID
    INTO quantidade;
    RETURN quantidade;
END $$

DELIMITER ;
