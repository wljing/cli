const { resolve, join } = require('path');
const { getRadio, readDir, getInput } = require('../utils');
const download = require('download');
const adm_zip = require('adm-zip');
const { writeFileSync, fstat, rmdirSync, unlinkSync } = require('fs');

const templateList = ['react'];

const host = 'https://github.com/wljing/cli/raw/master/template/';

module.exports = {
  descript: '模板',
  exec: async ({ params = [] }) => {
    let templateName = '';
    let appName = params[1] || '';
    if (params[0] && templateList.includes(params[0])) {
      templateName = params[0];
    }
    while (appName === '') {
      appName = await getInput('项目名称');
    }
    if (templateName === '') {
      templateName = await getRadio('项目模板', templateList);
    }
    const execPath = process.cwd();
    const url = `${host}${templateName}.zip`;
    const filename = `${appName}.zip`;
    await download(url, execPath, {
      filename,
    });
    const tempFilePath = join(execPath, filename);
    console.log('下载完成, 开始解压...', tempFilePath, join(execPath, appName));
    const zip = new adm_zip(tempFilePath);
    zip.extractAllTo(join(execPath, appName));
    unlinkSync(tempFilePath);
  }
}