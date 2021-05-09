/**
 * @description 文件模块工具函数
 * @author wljing<wljing@aliyun.com>
 * @date 2021/03/13
 */

const fs = require('fs');

/**
 * @description 检测路径是否是文件夹
 * @param {string} path 路径
 * @returns 
 */
const isDirectory = path => fs.statSync(path).isDirectory();

/**
 * @description 读取文件
 * @param {string} path 文件路径
 * @returns 
 */
const readFile = (path) => fs.readFileSync(path, { encoding: 'utf-8' });

/**
 * @description 读取文件夹
 * @param {string} path 文件夹路径
 * @returns {object} 文件树
 */
const readDir = (path, res = {}) => {
  if (!isDirectory(path)) {
    throw `path:${path} is not a directory`;
  }
  const fileList = fs.readdirSync(path);
  fileList.forEach(filename => {
    const fullPath = `${path}/${filename}`;
    if (isDirectory(fullPath)) {
      res[filename] = {};
      readDir(fullPath, res[filename]);
    } else {
      res[filename] = readFile(fullPath);
    }
  });
  return res;
};

module.exports = {
  readFile,
  readDir,
};