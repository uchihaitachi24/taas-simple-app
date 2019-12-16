const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get('*', (request, response) => {
  response.sendStatus(200)
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Uh oh!', err)
  }
  console.log(`Server listening on ${port}!`)
});