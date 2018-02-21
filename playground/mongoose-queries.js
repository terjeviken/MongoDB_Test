const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");
const {ObjectID} = require("mongodb");

var id = "5a8d17a2c22c2ad811c791a5";
var userId = "5a8c27a0d376a5c40b6f1a28";

function validMongoId(the_id){
  return ObjectID.isValid(the_id);
}

if (validMongoId(userId)){
  User.findById(userId).then( (user) =>{
    if (!user)
      return console.log("User not found");

    console.log("User",user);
  });
}
else{
  console.log("Invalid user id");
}
//
// Todo.find({
//   _id: id // mongoose makes this an ObjectID
// }).then((todos)=>{
//   console.log("Todos",todos);
// });
//
// Todo.findOne({
//   _id: id // mongoose makes this an ObjectID
// }).then((todo)=>{
//   console.log("Todo",todo);
// });
//
// Todo.findById( id ).then((todo)=>{
//   if (!todo)
//     return console.log(`Id ${id} not found`);
//
//   console.log("Todo",todo);
// }).catch( (e)=> console.log(e));
