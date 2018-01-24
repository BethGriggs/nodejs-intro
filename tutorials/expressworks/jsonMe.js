var express = require('express')
var fs = require('fs')
var app = express()

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(err, data){
    if (err) return res.sendStatus(500)  // send HTTP 500
    try {
      books = JSON.parse(data)
    } catch (err) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
