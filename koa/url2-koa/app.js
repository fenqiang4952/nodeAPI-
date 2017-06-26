// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')

const app = new Koa()

app.use(bodyParser())
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
