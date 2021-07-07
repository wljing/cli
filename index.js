#!/usr/bin/env node

const { exec, startCommand } = require('./commands')

const [command = startCommand, ...params] = process.argv.slice(2);

exec(command, params);