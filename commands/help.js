module.exports = {
  descript: '帮助',
  exec: ({ commandMap, startCommand }) => {
    console.log('命令列表：');
    let msg = '';
    commandMap.forEach((v, key) => {
      if (key !== startCommand) {
        msg += `${key}\t${v.descript}\n`;
      }
    });
    console.log(msg);
  }
}