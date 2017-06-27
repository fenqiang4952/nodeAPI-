const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')
const staticFiles = require('./static-files')
const templating = require('./templating')

const app = new Koa()

app.use(staticFiles('/static/', path.join(__dirname, '/static')))
app.use(bodyParser())

app.use(templating('views', {
  noCache: !isProduction,
  watch: !isProduction
}))
app.use(controller())

app.use(async (ctx, next) => {
  const start = new Date().getTime() // 当前时间
  await next() // 调用下一个middleware
  const ms = new Date().getTime() - start // 耗费时间
  console.log(`Time: ${ms}ms`) // 打印耗费时间
})

// 在端口3000监听:
app.listen(3000)
console.log('app started at port 3000...')
