
var proxy = {
  defaultTarget: 'http://127.0.0.1:9527', // 默认地址
  items: [{
    name: '/api' // 假设接口地址为 /api1/user 则name为"/api1"
    // target: 'http://127.0.0.1:10086' // 特殊接口代理地址不一致时可设置此项
  }, {
    name: '/api2'
  }]
}

const proxyConfig = (function () {
  var obj = {}
  proxy.items.forEach(function (item) {
  if (item.target) {
    obj[item.name] = {
      target: item.target, 
      changeOrigin: true,
      secure: false
    }
  } else {
    obj[item.name] = {
      target: proxy.defaultTarget, 
      changeOrigin: true,
      secure: false
    }
  }
  obj[item.name].pathRewrite = {}
  obj[item.name].pathRewrite[item.name] = item.name// 代理地址替换标识
  })
  return obj
})()

module.exports = proxyConfig