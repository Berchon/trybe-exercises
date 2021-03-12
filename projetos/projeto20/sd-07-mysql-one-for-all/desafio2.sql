CREATE VIEW estatisticas_musicais AS (
    SELECT
        COUNT(DISTINCT db_cancoes.id) AS cancoes,
        COUNT(DISTINCT db_artistas.id) AS artistas,
        COUNT(DISTINCT db_albuns.id) AS albuns
    FROM SpotifyClone.cancoes AS db_cancoes
    INNER JOIN SpotifyClone.albuns AS db_albuns
    INNER JOIN SpotifyClone.artistas AS db_artistas
);
