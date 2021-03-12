DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
    BEFORE DELETE ON SpotifyClone.usuarios
    FOR EACH ROW
BEGIN
    DELETE FROM SpotifyClone.historico WHERE historico.usuarios_id = OLD.id;
    DELETE FROM SpotifyClone.seguidores WHERE seguidores.usuarios_id = OLD.id;
END $$
DELIMITER ;
