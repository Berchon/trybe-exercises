#!/bin/bash

#6
if [ -f $1 ]
then
    echo "é um arquivo"
elif [ -d $1 ]
then
    echo "é um diretório"
else
    echo "é outra coisa"
fi

ls -l $1