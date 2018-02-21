const mongoose = require("mongoose");
const {ObjectID} = require("mongodb");
const db_host = "46.101.205.213";
const db_port = 27017;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${db_host}:${db_port}/TodoApp`);


var validID = function(the_id){
  return ObjectID.isValid(the_id);
};

module.exports  = {
  mongoose,
  validID
};
