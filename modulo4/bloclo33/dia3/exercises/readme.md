# Agora, a prática
Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

## Considerações MacOS
Se você está utilizando MacOS, por favor, leias essas considerações. Caso contrário, pode seguir adiante para os exercícios.

Conforme explicado na aula ao vivo, como o uso avançado de firewalls é mais comum em servidores, sendo esses mais comuns estarem utilizando linux ou windows, demos uma atenção maior ao iptables , que provavelmente será o firewall com o qual iremos lidar no nosso dia-a-dia.

Porém, não podemos te deixar de fora da prática! Sendo assim, iremos passar um passo a passo sobre como você irá configurar uma máquina Linux no seu computador através do docker . Para começar, você precisa de instalar o docker no seu computador. Para isso, utilize o comando brew para auxiliar:
```bash
$ brew cask install docker
```
Em seguida, execute o aplicativo do `docker`, que foi instalado na sua máquina através do **brew cask**, dê privilegio para o docker passando a sua senha e pronto! O `docker` já está rodando! Para testar, execute o comando abaixo:
```bash
$ docker ps
```
Tudo certo até então? Agora rode o comando abaixo para subir uma máquina Linux com a distro `ubuntu 20.`. Estamos passando a tag `--privileged` para que você consiga executar os comandos dos exercícios sem problemas de permissão de `host`:
```bash
$ docker run --privileged -it ubuntu:20.04 bash
```
Beleza, com a máquina Linux rodando, execute os comandos abaixo para instalar o `iptables`, o `ping` e o `traceroute`:
```bash
$ apt-get update && apt-get install iputils-ping

$ apt-get update && apt-get install traceroute

$ apt-get update && apt-get install iptables
```
Agora rode os comandos abaixo para testar se está tudo certo:
```bash
$ ping google.com

$ traceroute google.com

$ iptables -L
```
Se algum deles não funcionar, reinicie o `docker` através do ícone na barra de tarefas, próximo à data e hora do computador. Em seguida, teste novamente.
Feito tudo isso, você já tem uma máquina linux sendo executada no seu computador e já está apta ou apto a fazer os exercícios abaixo!

## Exercícios
Agora vamos colocar em prática todo o conteúdo que vimos. Para isso faremos alguns exercícios práticos utilizando nossos conhecimentos sobre firewall.

**Exercício 1 :** Defina uma regra de firewall utilizando o comando `iptables -A`, que bloqueie ( `block` ou `REJECT/DROP` ) toda a entrada ( `in` ou `INPUT` ) de pacotes utilizando o protocolo `ICMP` , impedindo assim que a máquina responda ao comando `ping` . Lembre-se, você pode executar o comando `ping` para validar se sua regra está funcionando corretamente: `ping 127.0.0.1` (você pode adicionar o parâmetro `-O` para exibir os pings rejeitados também 😉).
```bash
$ iptables -A INPUT -p icmp -j REJECT
```

**Exercício 2 :** Exclua a regra anterior utilizando o parâmetro `-D`.
```bash
 iptables -D INPUT -p icmp -j REJECT
```

**Exercício 3 :** Agora vamos criar uma regra para bloquear o tráfego HTTPS. Para isso, iremos bloquear a saída de pacotes ( `out` ou `OUTPUT` ). Lembre-se, a porta padrão para esse protocolo é a `443` , para especificá-la utilize o parâmetro `--sport` . Ele utiliza também o protocolo `tcp` . Para testar sua regra, tente acessar um site pelo navegador que use o protocolo, como o Youtube, o Google ou o Facebook.
```bash
 iptables -A OUTPUT -p tcp --sport 443 -j REJECT
```

**Exercício 4 :** Bloqueie agora o tráfego de saída para HTTP. Lembre-se, também é utilizado o protocolo `tcp` e a porta `80` . Para testar sua regra, tente acessar um site pelo navegador que use `HTTP` .
```bash
$ iptables -A OUTPUT -p tcp --sport 80 -j REJECT
```

**Exercício 5 :** Para finalizar, vamos limpar todas as regras. Para isso, utilize o comando `--flush` do iptables (Linux).
```bash
$ iptables --flush
```

**Exercício 6 :** Agora, vamos utilizar um tipo de proxy bem legal que pode ser bastante útil no nosso dia como pessoas desenvolvedoras: o [NGROK](https://ngrok.com/) . Com ele conseguimos criar um túnel para o nosso `localhost`.
1. Crie um servidor HTTP em sua máquina executando na porta `80` , pode ser um front-end ou um back-end criado em aulas anteriores.
```javascript
const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(80);
```
Para rodar o servidor
```bash
$ node index.js
```
2. Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções no [site oficial](https://ngrok.com/download) .
3. Conforme instruções do site, crie um túnel para a porta `80` de sua máquina.
4. Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos, como seu smartphone ou outro computador 😎.

```bash
$ ./ngrok http 80
```
**Exercício 7 :** No conteúdo vimos o que são os protocolos SSL e TLS. Vamos subir nosso próprio servidor HTTPS, utilizando nosso próprio certificado!
1. Vamos utilizar a ferramenta [OpenSSL](https://www.openssl.org/) para gerar nossos certificados. Ela já vem instalada na maioria das distro Linux.
2. Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo. Lembrando que, como nós estamos gerando o certificado, ele não será reconhecido por nenhuma entidade certificadora, de modo que ele só nos servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser aceito pelo navegador.
```bash

$ openssl genrsa -out key.pem
$ openssl req -new -key key.pem -out csr.pem
$ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
$ rm csr.pem
```
3. Acabamos de gerar dois arquivos, o `cert.pem` (o certificado) e o `key.pem` (chave privada). Copie os dois arquivos para um diretório onde iremos criar nosso server HTTPS, utilizando o [modulo HTTPS do Node.js](https://nodejs.org/api/https.html).
4. Siga [a documentação do módulo](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener) para criar seu servidor HTTPS.
```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

https
  .createServer(options, (_req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(8000);
```
5. Acesse o servidor utilizando o navegador. Perceba que ele irá informar que o certificado não é reconhecido por ele, pois não foi assinado por nenhuma entidade da confiança dele.
6. Acesse o servidor novamente, porém, desta vez utilizando cURL.
```bash
$ curl https://localhost:8000
```
7. Por último, vamos utilizar um recurso do cURL, somente para testes (somente utilize, caso realmente você esteja esperando por aquilo), que é o parâmetro `-k` ou `--insecure`. Com ele, falamos para o nosso cURL prosseguir a request mesmo sabendo que a conexão não é "confiável".
```bash
$ curl --insecure https://localhost:8000
```
