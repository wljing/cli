/**
 * @description 人机交互模块工具函数
 * @author wljing<wljing@aliyun.com>
 * @date 2021/03/13
 */

const inquirer = require('inquirer');

const getInput = (key, options = {}) => {
  return new Promise((resolve, reject) => {
    inquirer.prompt([{
      type: 'input',
      message: `请输入${key}`,
      name: key,
      ...options,
    }])
      .then(res => resolve(res[key]))
      .catch(e => reject(null));
  })
};

const getRadio = (key, choices, options = {}) => {
  return new Promise((resolve, reject) => {
    inquirer.prompt([{
      type: 'list',
      message: `请选择${key}`,
      name: key,
      choices,
      ...options,
    }])
      .then(res => resolve(res[key]))
      .catch(e => reject(null));
  })
};

const getIs = (key, options = {}) => {
  return new Promise((resolve, reject) => {
    inquirer.prompt([{
      type: 'confirm',
      message: `是否${key}`,
      name: key,
      ...options,
    }])
      .then(res => resolve(res[key]))
      .catch(e => reject(null));
  })
};


module.exports = {
  getInput,
  getRadio,
  getIs,
  inquirer,
};
