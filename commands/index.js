const { join, resolve } = require('path');
const { readDir } = require('../utils')

const startCommand = Symbol('start');

const commandMap = new Map([
  [startCommand, {
    exec: () => {
      execCommand('help')
    }
  }]
]);

const commandFiles = readDir(__dirname);
Object.keys(commandFiles).forEach(filename => {
  if (filename !== 'index.js') {
    commandMap.set(filename.split('.')[0], require(join(__dirname, filename)))
  }
})

/**
 * @description 执行命令
 * @param {string} command 命令名
 * @param {array} params 参数
 * @returns 
 */
const execCommand = async (command, params) => {
  const { exec } = commandMap.get(command) || {};
  if (typeof exec === 'function') {
    return exec({
      params,
      commandMap,
      startCommand,
    });
  }
}

const getCommandMap = () => commandMap;

module.exports = {
  exec: execCommand,
  getCommandMap,
  startCommand,
};