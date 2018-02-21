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
   try {

   } catch (e) {

   } finally {

   } Todo.find().then( (todos)=>{
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

app.listen(PORT,()=>{
  console.log("Server up - listening on port: " + PORT);
});


module.exports = {app};



// var User = mongoose.model("User",{
//      email : {
//         type : String,
//         required : true,
//         trim : true,
//         minLength : 5
//      }
// });
//
// var newUser = new User({
//   email : "a@b.c"
// });
//
// newUser.save().then( (usr)=>{
//   console.log("Todo-item saved: " + usr._id.getTimestamp());
// }, (e)=>{
//   console.log("Unable to save user:", e);
// });

// var newTodo = new Todo({
//     text : "Fiske akkar",
//     completed : true,
//     completedAt : 12345
// });

// var newTodo = new Todo({
//     text : " Create a blockbustser movie   "
//
// });

// newTodo.save().then( (theDoc)=>{
//   console.log("Todo-item saved: " + theDoc._id.getTimestamp());
// }, (e)=>{
//   console.log("Unable to save todo-item:", e);
// });
