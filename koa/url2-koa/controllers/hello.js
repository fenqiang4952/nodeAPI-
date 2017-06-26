const fn_hello = async (ctx, next) => {
  const name = ctx.params.name
  ctx.response.body = `<h1>${name}</h1>`
}

module.exports = {
  'GET /hello/:name': fn_hello
}
