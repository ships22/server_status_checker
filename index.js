//dependencies -
const http = require('http')

// app object module scaffholding -
const app = {}

//app configuration -
app.config = {
  PORT: 3001,
}

//creating server -
app.createServer = () => {
  const server = http.createServer(app.handleReqRes)
  server.listen(app.config.PORT, () => {
    console.log(`Server is listnening on port ${app.config.PORT}`)
  })
}

//handling request and response -
app.handleReqRes = (request, respone) => {
  respone.end('tested ok!!!...')
}

//starting server -
app.createServer()
