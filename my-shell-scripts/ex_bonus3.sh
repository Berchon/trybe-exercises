#!/bin/bash

#BONUS

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