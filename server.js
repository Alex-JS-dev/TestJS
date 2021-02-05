var express = require('express');
const store = require('data-store')
const fs = require('fs');
const mystore = new store({path: 'Users.json'});
var app = express();
app.get("/", function (request, response) {
  response.send("Robux project")
});
app.get("/get", function (request, response) {
  console.log(request.query)
  if (request.query.key === process.env.Get) {
    response.send(mystore.get(request.query.userid))
  }else{
    response.send('wrong key bud')
  }
});
app.get("/save", function (request, response) {
  console.log(request.query)
  if (request.query.key === process.env.Send) {
    mystore.set(request.query.userid,request.query.data)
    response.send('success!')
  }else{
    response.send('wrong key gamer')
  }
});
app.get("/all", function (request, response) {
  if (request.query.key === process.env.Get) {
    
    response.send(mystore.data)
  }else{
    response.send('wrong key gamer')
  }
});
app.get("/del", function (request, response) {
  if (request.query.key === process.env.Send) {
    mystore.del(request.query.userid)
    response.send('Deleted')
  }else{
    response.send('wrong key bud')
  }
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
