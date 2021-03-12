DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;
USE SpotifyClone;

CREATE TABLE planos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    plano VARCHAR(45) NOT NULL,
    valor DECIMAL (5, 2) NOT NULL
);

CREATE TABLE artistas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    artista VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS albuns (
    id INT PRIMARY KEY AUTO_INCREMENT,
    album VARCHAR(45) NOT NULL,
    artistas_id INT NOT NULL,
    CONSTRAINT `fk_albuns_artistas` FOREIGN KEY (artistas_id) REFERENCES SpotifyClone.artistas (id)
);

CREATE TABLE IF NOT EXISTS cancoes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cancao VARCHAR(45) NOT NULL,
  albuns_id INT NOT NULL,
  CONSTRAINT `fk_cancoes_albuns1` FOREIGN KEY (albuns_id) REFERENCES SpotifyClone.albuns (id)
);

CREATE TABLE IF NOT EXISTS usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario VARCHAR(45) NOT NULL,
  idade TINYINT UNSIGNED ZEROFILL NOT NULL,
  planos_id INT NOT NULL,
  CONSTRAINT `fk_usuarios_planos1` FOREIGN KEY (planos_id) REFERENCES SpotifyClone.planos (id)
);

CREATE TABLE IF NOT EXISTS seguidores (
  artistas_id INT NOT NULL,
  usuarios_id INT NOT NULL,
  PRIMARY KEY (artistas_id, usuarios_id),
  CONSTRAINT `fk_artistas_has_usuarios_artistas1` FOREIGN KEY (artistas_id) REFERENCES SpotifyClone.artistas (id),
  CONSTRAINT `fk_artistas_has_usuarios_usuarios1` FOREIGN KEY (usuarios_id) REFERENCES SpotifyClone.usuarios (id)
);

CREATE TABLE IF NOT EXISTS historico (
  cancoes_id INT NOT NULL,
  usuarios_id INT NOT NULL,
  PRIMARY KEY (cancoes_id, usuarios_id),
  CONSTRAINT `fk_cancoes_has_usuarios_cancoes1` FOREIGN KEY (cancoes_id) REFERENCES SpotifyClone.cancoes (id),
  CONSTRAINT `fk_cancoes_has_usuarios_usuarios1` FOREIGN KEY (usuarios_id) REFERENCES SpotifyClone.usuarios (id)
);


INSERT INTO planos (plano, valor)
VALUES
    ('gratuito', 0),
    ('familiar', 7.99),
    ('universitário', 5.99);

INSERT INTO artistas (artista)
VALUES
    ('Walter Phoenix'), ('Peter Strong'),
    ('Lance Day'),
    ('Freedie Shannon');

INSERT INTO albuns (album, artistas_id)
VALUES
    ('Envious', 1),
    ('Exuberant', 1),
    ('Hallowed Steam', 2),
    ('Incandescent', 3),
    ('Temporary Culture', 4);

INSERT INTO cancoes (cancao, albuns_id)
VALUES
    ('Soul For Us', 1),
    ('Reflections Of Magic', 1),
    ('Dance With Her Own', 1),
    ('Troubles Of My Inner Fire', 2),
    ('Time Fireworks', 2),
    ('Magic Circus', 3),
    ('Honey, So Do I', 3),
    ('Sweetie, Let''s Go Wild', 3),
    ('She Knows', 3),
    ('Fantasy For Me', 4),
    ('Celebration Of More', 4),
    ('Rock His Everything', 4),
    ('Home Forever', 4),
    ('Diamond Power', 4),
    ('Honey, Let''s Be Silly', 4),
    ('Thang Of Thunder', 5),
    ('Words Of Her Life', 5),
    ('Without My Streets', 5);

INSERT INTO usuarios (usuario, idade, planos_id)
VALUES
    ('Thati', 23, 1),
    ('Cintia', 35, 2),
    ('Bill', 20, 3),
    ('Roger', 45, 1);

INSERT INTO seguidores (usuarios_id, artistas_id)
VALUES
    (1, 1),
    (1, 4),
    (1, 3),
    (2, 1),
    (2, 3),
    (3, 2),
    (3, 1),
    (4, 4);

INSERT INTO historico (usuarios_id, cancoes_id)
VALUES
    (1, 1),
    (1, 6),
    (1, 14),
    (1, 16),
    (2, 13),
    (2, 17),
    (2, 2),
    (2, 15),
    (3, 4),
    (3, 16),
    (3, 6),
    (4, 3),
    (4,18),
    (4, 11);
