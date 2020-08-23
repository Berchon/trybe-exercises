#!/bin/bash

#5
read -p "Digite um caminho " CAMINHO

if [ -f $CAMINHO ]
then
    echo "é um arquivo"
elif [ -d $CAMINHO ]
then
    echo "é um diretório"
else
    echo "é outra coisa"
fi

ls -l $CAMINHO