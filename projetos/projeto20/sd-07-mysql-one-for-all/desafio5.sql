CREATE VIEW top_2_hits_do_momento AS (
    SELECT
        cancoes.cancao AS cancao,
        COUNT(*) AS reproducoes
    FROM SpotifyClone.historico AS historico
    INNER JOIN SpotifyClone.cancoes AS cancoes ON historico.cancoes_id = cancoes.id
    GROUP BY historico.cancoes_id
    ORDER BY reproducoes DESC, cancao ASC
    LIMIT 2
);
