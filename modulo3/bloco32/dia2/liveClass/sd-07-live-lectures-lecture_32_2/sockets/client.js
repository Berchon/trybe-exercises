const net = require('net');
const client = new net.Socket();
const stdin = process.openStdin();

client.on('data', (data) => {
  console.log(data.toString('utf-8'));
});

client.connect(2500, 'localhost');

client.on('connect', () => {
  console.log('>')
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();

    client.write(message);
  })
})

client.on('end', () => console.log('Você deixou o chat'));

