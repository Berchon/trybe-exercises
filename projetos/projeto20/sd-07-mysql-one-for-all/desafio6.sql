CREATE VIEW faturamento_atual AS (
    SELECT
        ROUND(MIN(planos.valor), 2) AS faturamento_minimo,
        ROUND(MAX(planos.valor), 2) AS faturamento_maximo,
        ROUND(AVG(planos.valor), 2) AS faturamento_medio,
        ROUND(SUM(planos.valor), 2) AS faturamento_total
    FROM SpotifyClone.usuarios AS usuarios
    INNER JOIN SpotifyClone.planos AS planos ON usuarios.planos_id = planos.id
);
