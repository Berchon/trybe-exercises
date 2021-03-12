CREATE VIEW historico_reproducao_usuarios AS (
    SELECT
        usuarios.usuario AS usuario,
        cancoes.cancao AS nome
    FROM SpotifyClone.usuarios AS usuarios
    INNER JOIN SpotifyClone.historico  AS historico ON usuarios.id = historico.usuarios_id
    INNER JOIN SpotifyClone.cancoes AS cancoes ON cancoes.id = historico.cancoes_id
    ORDER BY usuario ASC, nome ASC
);
