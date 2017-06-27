
const fn_signin = async (ctx, next) => {
  const name = ctx.request.body.name || ''
  const password = ctx.request.body.password || ''
  console.log(`signin with name: ${name}, password: ${password}`)
  if (name === 'koa' && password === '12345') {
    ctx.render('signin-ok.html', {
      title: 'Sign In OK',
      name: name
    })
  } else {
    ctx.render('signin-failed.html', {
      title: 'Sign In Failed'
    })
  }
}

module.exports = {
  'POST /signin': fn_signin
}
