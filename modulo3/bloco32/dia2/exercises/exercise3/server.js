/* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
const net = require('net');

let thadeu = 0;

/* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  connection.on('data', (data) => {
    console.log(data.toString());
  });

  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  connection.on('end', () => {
    thadeu -= 1;
    console.log(`Número de conexões é ${thadeu}`);
    console.log('Cliente desconectado');
  });
  /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
  connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);
  
  server.getConnections((err, count) => {
    thadeu = count
    console.log(`Número de conexões é ${thadeu}`);
  });
});



/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});