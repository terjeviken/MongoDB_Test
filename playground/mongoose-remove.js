const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");
const {ObjectID} = require("mongodb");

var id = "5a8d17a2c22c2ad811c791a5";
var userId = "5a8c27a0d376a5c40b6f1a28";

// Todo.remove({}) <-- removes everything
// Todo.remove({}).then((result)=>{
//     console.log(result);
//     // result.result.n - num bremoves
// });

//
// Todo.findOneAndRemove({_id:"5a8db608da77625b21d2e451"}).then (deleted_todo) =>{
//
// }.catch( (e)=>{
//
// });

Todo.findByIdAndRemove("5a8db608da77625b21d2e45f").then( (deleted_todo) =>{
  console.log("Deleted: " + deleted_todo.text);
});

// Remove all completed
// Todo.remove({ completed: true}).then((deleted_items)=>{
//
// });
