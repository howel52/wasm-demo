#!/usr/bin/env node

const runScript = require('runscript');
const path = require('path');

const projDir = path.resolve(__dirname, '../program/Go');
const targetDir = path.resolve(__dirname, '../example/Go')

const shell = `cd ${projDir} && GOOS=js GOARCH=wasm go build -o ${targetDir}/func.wasm`;

runScript(shell, { stdio: 'pipe' })
  .then(stdio => {
    console.log(stdio);
  })
  .catch(err => {
    console.error(err);
  });