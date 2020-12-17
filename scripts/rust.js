#!/usr/bin/env node

const runScript = require('runscript');
const path = require('path');

const projDir = path.resolve(__dirname, '../program/Rust');
const targetDir = path.resolve(__dirname, '../example/Rust')

const shell = `cd ${projDir} && wasm-pack build --target no-modules && cp  -rf ${projDir}/pkg/rust_bg.wasm ${targetDir}/rust_bg.wasm && cp -rf ${projDir}/pkg/rust.js ${targetDir}/rust.js`;

runScript(shell, { stdio: 'pipe' })
  .then(stdio => {
    console.log(stdio);
  })
  .catch(err => {
    console.error(err);
  });