# Exercício 1:
Crie uma API simples que retorne uma mensagem. Feito isso, gerencie seus processos da seguinte maneira:

1. Crie UM processo no PM2 utilizando o CLI;
```bash
$ pm2 start index.js --name meuApp
```

2. Restart e recarregue o processo utilizando o CLI do PM2 (lembre-se que há comandos distintos para cada um);
```bash
$ pm2 restart meuApp
```
```bash
$ pm2 reload meuApp
```
3. Pare o processo;
```bash
$ pm2 stop meuApp
```
4. (Bônus) - Escalone para mais 5 processos;
```bash
$ pm2 scale myApp +5
```
5. (Bônus) - Defina para 3 a quantidade de processos;
```bash
$ pm2 scale myApp 3
```
6. Remova o processo da listagem do PM2 ;
```bash
$ pm2 delete myApp
```
