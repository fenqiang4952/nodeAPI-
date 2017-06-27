const fn_index = async (ctx, next) => {
  console.log(111)
  ctx.render('index.html', {
    title: 'welcome'
  })
}

module.exports = {
  'GET /': fn_index
}
