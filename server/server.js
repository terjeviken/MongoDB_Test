const {mongoose,validID} = require("./db/mongoose");
const {Todo} =  require("./models/todo");
const {User} =  require("./models/user");
const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// Setup routing
 app.post("/todos", (req,res) => {
    var todo = new Todo({
      text : req.body.text
    });

    todo.save().then((doc)=>{
      res.send(doc);
    }, (e)=>{
      res.status(400).send(e);
    })
 });

 app.get("/todos", (req, res) => {

   Todo.find().then( (todos)=>{
      res.send({todos});
   },(err)=>{
      res.status(400).send(err);
   });
 });

 app.get("/todos/:id", (req,res) =>{

   var id = req.params.id;

   if ( !validID(id) ){
     return res.status(404).send();
   }

    Todo.findById(id).then( (todo)=>{
      if (!todo)
       return res.status(404).send();
      res.send({todo});
    }, (e)=>{
     res.status(400).send(e);
   }).catch((e)=>{
      res.status(400).send();
   });
 });

 app.delete("/todos/:id", (req,res)=>{
   var id = req.params.id;

   if ( !validID(id) ){
     return res.status(404).send();
   }

   Todo.findByIdAndRemove(id).then( (todo) =>{
      if (!todo)
       return res.status(404).send();
      res.send({todo});
    }, (e)=>{
     res.status(400).send(e);
   }).catch((e)=>{
      res.status(400).send();
   });

 });

app.listen(PORT, ()=>{
  console.log("Server up - listening on port: " + PORT);
});


module.exports = {app};
