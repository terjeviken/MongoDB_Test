const mongoose = require("mongoose");

const db_host = "46.101.205.213";
const db_port = 27017;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${db_host}:${db_port}/TodoApp`);

module.exports  = {
  mongoose
};
