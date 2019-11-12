require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const controller = require('./products_controller')

const app = express()

app.use(express.json())

app.get('/api/products/:id', controller.getOne)
app.get('/api/products', controller.getAll)
app.put('/api/products/:id', controller.update)
app.post('/api/products', controller.create)
app.delete('/api/products/:id', controller.delete)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} churgers have been purchased.`))


massive(CONNECTION_STRING)
.then(dbInstance => {
  app.set('db', dbInstance)
})
  .catch( err => console.log(err))