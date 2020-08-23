#!/bin/bash

#BONUS

#2
for PARAM in $@
do
    echo $PARAM
    if [ -f $PARAM ]
    then
        echo "é um arquivo"
    elif [ -d $PARAM ]
    then
        echo "é um diretório"
    else
        echo "é outra coisa"
    fi

    ls -l $PARAM
done