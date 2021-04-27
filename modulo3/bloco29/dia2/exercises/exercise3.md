# Exercício 3: 
Explorando variáveis de ambiente:

1. Adicione à API o uso de uma variável de ambiente que altere a mensagem exibida em sua resposta ou outro comportamento que preferir;

2. Adicione ao arquivo ecosystem do exercício anterior dois contextos de variáveis: env_prod e env_homolog .
```yml
# ecosystem.config.yml
apps:
  - name: app
    script: ./index.js
    exec_mode: cluster
    instances: max
    watch: true
    max_memory_restart: 100M
    env_prod:
      ENVIRONMENT: PRODUCTION
    env_homolog:
      ENVIRONMENT: HOMOLOG
```
3. Execute o processo utilizando o contexto prod . Em seguida, execute o processo utilizando o contexto homolog . Valide se o comportamento foi alterado.
```bash
$ pm2 start ecosystem.config.yaml --env prod
```
```bash
$ pm2 start ecosystem.config.yaml --env homolog
```
