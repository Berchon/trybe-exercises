# Exercício 2:
Crie um arquivo ecosystem . O arquivo configurará o PM2 para:

1. Observar alterações no diretório da aplicação e, caso ocorram, reiniciar automaticamente sua aplicação;
2. Ativar o modo cluster e configurar a quantidade de processos rodando para o máximo possível;
3. Reiniciar o processo sempre que ele alcançar o consumo de 100MB de memória.
```yml
# ecosystem.config.yml
apps:
  - name: app
    script: ./index.js
    exec_mode: cluster
    instances: max
    watch: true
    max_memory_restart: 100M
```
