#!/usr/bin/env bash

ln -s /usr/bin/nodejs /usr/bin/node
cd applyee_frontend/
npm config set registry http://registry.npmjs.org/
npm install

