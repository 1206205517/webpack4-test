const express = require('express')

const app = express()
app.get('/xyx/info', (req, res)=> {
  res.json({
    name: 'webpack'
  })
})
app.listen(9092)