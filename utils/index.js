const fileUtil = require('./fs');
const inquirer = require('./inquirer');

module.exports = {
  ...fileUtil,
  ...inquirer,
}