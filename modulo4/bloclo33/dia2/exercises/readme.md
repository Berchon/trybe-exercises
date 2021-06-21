# Agora, a prática
Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado! Para isso iremos criar servers Node.js utilizando alguns dos protocolos vistos e, então, vamos explorá-los. Se tiver dúvidas ao utilizar alguma das ferramentas que mencionamos nos exercícios, exercite suas habilidades de busca no Google ou experimente o comando man !

**Exercício 1 :** O primeiro server que iremos utilizar é o nosso velho amigo HTTP, na camada de aplicação. Você pode tanto criar um quanto utilizar um dos projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os conhecimentos do conteúdo e a ferramenta cURL para realizarmos uma chamada HTTP para ele. A ideia aqui é que o projeto tenha rotas GET e POST, para que seja possível enviar requisições para os endpoints e receber respostas, assim como já nos acostumamos a receber via browser ou utilizando programas como o Postman.

Caso tenha dificuldades maiores, você pode utilizar o Postman para converter uma requisição em cURL, é só fazer a requisição nele como você já sabe e depois clicar no botão code (que fica embaixo do save) e escolher cURL.
1. Faça uma chamada GET, utilizando o cURL.
```bash
 curl localhost:3000
```
2. Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.
```bash
 curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{ "name": "Asdrubal" }' \
    localhost:3000
```
3. Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.
```bash
 curl --request POST \
    --header 'Content-Type: application/json' \
    --header 'Authorization: token' \
    --data '{ "name": "Asdrubal" }' \
    localhost:3000
```

**Exercício 2 :** Ainda utilizando o cURL, vamos explorar mais alguns conceitos do HTTP. Relembre que falamos que o HTTP organiza e dá significado aos dados encapsulados nessa camada. Por exemplo: ao vermos um 200 tanto nós quanto um client HTTP sabemos que aquela request foi realizada com sucesso. Vamos explorar isso com o cURL.
1. Faça uma chamada GET, utilizando o cURL, para `google.com`.
```bash
 curl google.com
```
2. Perceba que foi retornado um 301 . Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é `www.google.com`. Ao acessarmos pelo navegador, não percebemos isso porquê ele faz o redirecionamento para a página certa para nós ao encontrar o 301, porém, se você inspecionar a network você irá identificar esse redirecionamento. Faça uma nova chamada a `google.com`, porém agora utilizando o parâmetro `-L` ou `--location`, que serve para "seguir redirecionamentos".
```bash
 curl -L google.com
```

**Exercício 3 :** Agora utilizando o wget, pegue o conteúdo da página do site da Trybe, depois abra o arquivo HTML baixado em seu navegador. Faça o mesmo processo com outras páginas web.
```bash
 wget betrybe.com
```

**Exercício 4 :** Agora iremos para a camada de transporte. Vamos criar um server TCP, utilizando o módulo `NET` do Node.js. Como dissemos antes, o importante aqui é entender o conceito, aqui vão algumas ajudas:
1. A sintaxe do módulo `NET` é muito parecida com a do `socket.io` que conhecemos anteriormente.
2. Na documentação, temos um exemplo que se olhado com calma, podemos perceber que ele lembra bastante a sintaxe do socket.io, procure por `createServer` [neste link](https://nodejs.org/api/net.html) que contêm a documentação do `NET`.
3. Perceba que o servidor sozinho, não faz nada, ele precisa que alguém se conecte a ele, então para testá-lo, você pode utilizar o comando `telnet localhost 8085`, onde telnet é a aplicação que iremos utilizar, localhost é o local onde o servidor está (no caso, o seu próprio PC) e 8085 é a porta em que o servidor está escutando conexões.
4. Assim como no socket.io, onde cada evento recebe um nome, aqui também é assim, então pesquise por **Event: 'data'** para saber como tratar corretamente o evento de receber informações e deixá-las de forma legível para humanos.

Com essas dicas, crie um server com as seguintes especificações:
1. Responder com um "Olá, client", logo quando estabelecer uma conexão.

2. Imprimir no console todo dado recebido (não esqueça de converter o `data` para string para a informação ficar legível para nós, humanos).

3. Utilize a porta 8085.
```javascript
const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Olá, client!\n');

  socket.on('data', (data) => {
    console.log(data.toString());
  });
});

const PORT = 8085;

server.listen(PORT);

console.log(`Server TCP ativo!\nEscutando na porta: ${PORT}`);
```

**Exercício 5 :** Utilizando o comando telnet ou o Netcat (nc):
1. Conecte no server do exercício anterior e envie informações. O server deverá imprimir as mensagens enviadas no console.
2. Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.
```bash
 telnet 127.0.0.1 8085
 # Após estabelecer a conexão, basta digitar a mensagem e teclar enter para enviá-las.
```

**Exercício 6 :** Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP). Perceba o que é exibido no console do server, já que não estamos utilizando o HTTP nele. Perceba também que o comando cURL não recebe uma resposta HTTP com sentido (um status code 200, por exemplo), de modo que ele não sabe que aquela requisição chegou ao fim.
```bash
 curl --request POST \
    --data "{ \"name\": \"Asdrubal\" }" \
    --header 'Content-Type: application/json' \
    --header 'Foo-Bar-Header: foo-bar' \
    localhost:8085/foo-bar
```

**Exercício 7 :** Agora iremos explorar o outro protocolo de transporte que aprendemos, o UDP. Crie um servidor utilizando o módulo `dgram` do Node.js. Para isso, as dicas que vimos no exercício 4 se aplicam aqui, procure na [documentação](https://nodejs.org/api/dgram.html) o módulo que cria o servidor e como o evento deve ser nomeado. Uma coisa importante a se lembrar, é que enquanto o TCP faz controle de fluxo, o UDP não, então algumas diferenças serão percebidas no código também, nosso server deverá:
1. Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
2. Utilize a versão 4 do protocolo ( udp4 ).
3. Utilize a porta 8084.
```javascript
const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('message', (message) => {
  console.log(message.toString());
});

const PORT = 8084;

socket.bind(PORT);

console.log(`Server TCP ativo!\nEscutando na porta: ${PORT}`);
```

**Exercício 8 :** Envie pacotes para o servidor UDP utilizando o Netcat (nc). Em seguida pare o servidor e perceba que como não há conexão nada é sentido pelo client.
```bash
 nc -u 127.0.0.1 8084
 # Após executar o comando, digite a mensagem e tecle enter para enviá-las.
```

**Exercício 9 :** Faça uma chamada ao server utilizando o `cURL` . Lembre que, além do HTTP, o comando utiliza o protocolo TCP e não o UDP. Repare o que acontece.
```bash
 curl localhost:8084
```
# Bônus

**Exercício 10 :** Identifique o IP interno e externo da sua máquina.
```bash
# IP externo
curl ifconfig.me

# IP interno
ifconfig
```
**Exercício 11 :** Identifique as interfaces de redes utilizadas por sua máquina e identifique qual está em uso agora.
```bash
ifconfig
```
