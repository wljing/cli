const { resolve, join } = require('path');
const { getRadio, readDir } = require('../utils');
const download = require('download');

const templateList = ['react'];

const host = 'https://github.com/wljing/cli/tree/master/template/';

module.exports = {
  descript: '模板',
  exec: async ({ params }) => {
    let templateName = '';
    if (params.length !== 0) {
      if (Reflect.has(templateMap, params[0])) {
        templateName = params[0];
      } else {
        console.log(`模板${params[0]} 不存在!\n模板列表:\n`);
      }
    }
    if (templateName === '') {
      templateName = await getRadio('项目模板', templateList);
      const url = `${host}${templateName}.zip`;
    }
  }
}