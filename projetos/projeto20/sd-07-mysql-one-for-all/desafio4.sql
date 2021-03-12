CREATE VIEW top_3_artistas AS (
    SELECT
        artistas.artista AS artista,
        COUNT(*) AS seguidores
    FROM SpotifyClone.seguidores AS seguidores
    INNER JOIN SpotifyClone.artistas AS artistas ON artistas.id = seguidores.artistas_id
    GROUP BY seguidores.artistas_id
    ORDER BY seguidores DESC, artista ASC
    LIMIT 3
);
