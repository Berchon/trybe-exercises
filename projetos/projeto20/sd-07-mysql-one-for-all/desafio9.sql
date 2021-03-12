DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN nome VARCHAR(45))
BEGIN
    SELECT
        artistas.artista AS artista,
        albuns.album AS album
    FROM SpotifyClone.albuns AS albuns
    INNER JOIN SpotifyClone.artistas AS artistas ON artistas.id = albuns.artistas_id
    WHERE artistas.artista = nome
    ORDER BY album ASC;
END $$

DELIMITER ;
