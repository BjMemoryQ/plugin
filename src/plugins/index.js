class MyExampleWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'MyExampleWebpackPlugin',
      (compilation, callback) => {
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div id="app"></div>
        </body>
        <script src="./bundle.js"></script>
        </html>
      `
        compilation.assets['index.html'] = {
          source() {
            return html
          },
          size() {
            return html.length
          },
        }
        callback()
      }
    )
  }
}

module.exports = MyExampleWebpackPlugin
