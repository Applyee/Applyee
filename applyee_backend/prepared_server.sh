#!/usr/bin/env bash

BASEDIR=$(dirname "$0")

rm -rf db.sqlite3
python $BASEDIR/manage.py makemigrations
python $BASEDIR/manage.py migrate
python $BASEDIR/manage.py runserver 0.0.0.0:8000

