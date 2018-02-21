const mongoose = require("mongoose");
const {ObjectID} = require("mongodb");
const db_host = "46.101.205.213"; // limited by firewall to dev pc
const db_port = 27017;


const  devUri = `mongodb://${db_host}:${db_port}/TodoApp`;
const prodUri = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PORT ? prodUri : devUri);


var validID = function(the_id){
  return ObjectID.isValid(the_id);
};

module.exports  = {
  mongoose,
  validID
};
