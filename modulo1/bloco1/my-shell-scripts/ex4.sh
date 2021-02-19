#!/bin/bash

#4
CAMINHO="/home/berchon/unix_tests/countries.txt"
if [ -f $CAMINHO ]
then
    echo "O caminho $CAMINHO está habilitado"
    if [ -w $CAMINHO ]
    then
        echo "Você tem permissão para editar $CAMINHO"
    else
        echo "Você não foi autorizado a editar $CAMINHO"
    fi
fi