const http = require('http');

http.createServer((req, res) => {
  res.writeHead(301, {
    location: `https://www.huashuiai.icu${req.url}`
  })

  res.end('')
}).listen(3000)
