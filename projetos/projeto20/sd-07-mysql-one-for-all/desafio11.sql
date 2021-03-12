CREATE VIEW cancoes_premium AS (
    SELECT
        cancoes.cancao AS nome,
        COUNT(historico.usuarios_id) AS reproducoes
    FROM SpotifyClone.historico AS historico
    INNER JOIN SpotifyClone.cancoes AS cancoes ON historico.cancoes_id = cancoes.id
    INNER JOIN SpotifyClone.usuarios AS usuarios ON historico.usuarios_id = usuarios.id
    INNER JOIN SpotifyClone.planos AS planos ON usuarios.planos_id = planos.id
    WHERE planos.plano = 'familiar' OR planos.plano = 'universitário'
    GROUP BY historico.cancoes_id, historico.usuarios_id
    ORDER BY nome ASC
);
