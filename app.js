const express = require('express')
const totp = require('totp-generator')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.options('*', cors())

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.post('/totp', (req, res) => {
  try {
    let otp = totp(req.body.key)
    res.send(otp)
  } catch(e) {
    res.sendStatus(500).send(e)
  }
})

app.listen(port, () => {
  console.log(`Autify util api has started running`)
})
