-- BONUS

-- Exercício 1 : Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

-- Escreva uma query para ordernar o nome das empresas de forma alfabética descendente e que retorne somente o código e o nome da primeira empresa.
SELECT Code, Name FROM PiecesProviders.Providers ORDER BY Name DESC LIMIT 1;

-- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;

-- Escreva uma query para exibir o nome das empresas e preço das peças, começando a lista a partir do 3º item, e exibindo o preço das quatro peças mais caras.
SELECT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;

-- Escreva uma query para exibir a string "A peça mais cara é a: Piece , provida pela empresa Provider e custa Price reais.", essa query deve retornar somene uma única string, sendo que Price se refere ao maior preço.
SELECT CONCAT('A peça mais cara é a: ', Piece, ' , provida pela empresa ', Provider, ' e custa ', Price, ' reais.') FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 1;