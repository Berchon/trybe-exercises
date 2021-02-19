#!/bin/bash

#echo "Meu primeiro script!"
#read A
#read B
#echo $(($A + $B))
#C=$(($A + $B))

#read D
#echo `$D`

# #1
# echo "Shell Script é demais!"

# #2
# A="Shell Script com VARIAVEIS é demais!"
# echo $A

# #3
# B=`hostname`
# echo "Este script está rodando no computador: $B"

# #4
# CAMINHO="/home/berchon/unix_tests/countries.txt"
# if [ -f $CAMINHO ]
# then#1
# echo "Shell Script é demais!"

# #2
# A="Shell Script com VARIAVEIS é demais!"
# echo $A

# #3
# B=`hostname`
# echo "Este script está rodando no computador: $B"

# #4
# CAMINHO="/home/berchon/unix_tests/countries.txt"
# if [ -f $CAMINHO ]
# then
#     echo "O caminho $CAMINHO está habilitado"
#     if [ -w $CAMINHO ]
#     then
#         echo "Você tem permissão para editar $CAMINHO"
#     else
#         echo "Você não foi autorizado a editar $CAMINHO"
#     fi
# fien
#         echo "Você tem permissão para editar $CAMINHO"
#     else
#         echo "Você não foi autorizado a editar $CAMINHO"
#     fi
# fi

# #5
# read -p "Digite um caminho " CAMINHO

# if [ -f $CAMINHO ]
# then
#     echo "é um arquivo"
# elif [ -d $CAMINHO ]
# then
#     echo "é um diretório"
# else
#     echo "é outra coisa"
# fi

# ls -l $CAMINHO

# #6
# if [ -f $1 ]
# then
#     echo "é um arquivo"
# elif [ -d $1 ]
# then
#     echo "é um diretório"
# else
#     echo "é outra coisa"
# fi

# ls -l $1

#7
# if [ ! -d $1 ]
# then
#     echo "O argumento $1 não é um diretório!"
# else
#     echo "O $1 tem `ls $1 | wc -l` arquivos"
# fi

#BONUS
#1
# PALAVRAS="shell script usando estrutura repetição for terminal"
# for PALAVRA in $PALAVRAS
# do
#     echo $PALAVRA
# done

#2
# for PARAM in $@
# do
#     echo $PARAM
#     if [ -f $PARAM ]
#     then
#         echo "é um arquivo"
#     elif [ -d $PARAM ]
#     then
#         echo "é um diretório"
#     else
#         echo "é outra coisa"
#     fi

#     ls -l $PARAM
# done

#3
INFO=`ls ./teste`
for ARQ in $INFO
do
    echo $ARQ
    YEAR=`date -r a.txt +%Y`
    MOUNTH=`date -r a.txt +%m`
    DAY=`date -r a.txt +%d`

    mv "./teste/$ARQ" "./teste/$YEAR-$MOUNTH-$DAY-$ARQ"
done