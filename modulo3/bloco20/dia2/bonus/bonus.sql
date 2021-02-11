SELECT Code, Name FROM PiecesProviders.Providers ORDER BY Name DESC LIMIT 1;
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
SELECT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
SELECT CONCAT('A peça mais cara é a: ', Piece, ' , provida pela empresa ', Provider, ' e custa ', Price, ' reais.') FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 1;