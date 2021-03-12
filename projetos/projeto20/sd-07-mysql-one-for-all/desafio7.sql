-- Retirado do stackoverflow
-- https://stackoverflow.com/questions/2421388/using-group-by-on-multiple-columns

CREATE VIEW perfil_artistas AS (
    SELECT
        artistas.artista AS artista,
        albuns.album AS album,
        COUNT(*) AS seguidores
    FROM SpotifyClone.albuns AS albuns
    INNER JOIN SpotifyClone.artistas AS artistas ON artistas.id = albuns.artistas_id
    INNER JOIN SpotifyClone.seguidores AS seguidores ON artistas.id = seguidores.artistas_id
    GROUP BY artistas.id, albuns.id
    ORDER BY seguidores DESC, artista ASC, album ASC
);
