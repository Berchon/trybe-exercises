# Exercício 6:
Adicione mais de um processo a ser iniciado pelo seu arquivo ecosystem . Para isso, pode-se adicionar dois processos com comportamentos diferentes, através do mesmo código fonte, ou adicionar mais uma API ou script ao projeto. A ideia é que, ao executar utilizando o ecosystem, o PM2 suba processos com nomes e características diferentes.
```yml
# ecosystem.config.yml

apps:
  - name: app-1
    script: ./app-1/index.js
    exec_mode: cluster
    instances: 2
  - name: app-2
    script: ./app-2/index.js
    exec_mode: cluster
    instances: 2
```
