const fs = require('fs')
const path = require('path')

function addMapping (router, mapping) {
  for (var url in mapping) {
    if (mapping.hasOwnProperty(url)) {
      if (url.startsWith('GET')) {
        const api_path = url.substring(4)
        router.get(api_path, mapping[url])
      } else if (url.startsWith('POST')) {
        const api_path = url.substring(5)
        router.post(api_path, mapping[url])
      } else {
        // 无效的URL
      }
    }
  }
}

function addControllers (router) {
  const files = fs.readdirSync(path.join(__dirname, '/controllers'))
  const js_files = files.filter((f) => {
    return f.endsWith('.js')
  })
  js_files.forEach((f) => {
    let mapping = require(path.join(__dirname, '/controllers/', f))
    addMapping(router, mapping)
  })
}

module.exports = function (dir) {
  let controllers_dir = dir || 'controllers'
  const router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}
