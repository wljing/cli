const { resolve, join } = require('path');
const { getRadio, readDir } = require('../utils');

const templateList = [];

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
      const templateList = [];
      templateMap.forEach((_, key) => {
        templateList.push(key);
      })
      templateName = await getRadio('项目模板', templateList)
        .then(res => {
          console.log('res', res);
        })
    }
  }
}