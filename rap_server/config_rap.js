// https://www.npmjs.com/package/rap-node-plugin
var configRap = {
  base: {
    projectId: 47,                // 项目ID，默认请参见config 
    port: 8080,                      // 端口，默认请参见config 
    host: 'rap.mucfc.com',   // 主机，默认请参见config 
    mock: '/mockjsdata/' //返回mock json 数据
  },
  urls: [
    '/api/getAge'
  ]
}

module.exports = configRap