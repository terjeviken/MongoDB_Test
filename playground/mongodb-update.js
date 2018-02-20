//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const db_host = "46.101.205.213";
const db_port = 27017;


MongoClient.connect(`mongodb://${db_host}:${db_port}/TodoApp`,(err, db )=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log(`Connected to MongoDB server: ${db_host}:${db_port}`);

  // db.collection("Todos").findOneAndUpdate(
  //   {
  //     _id : new ObjectID("5a8bc0130d3f06cbca3e9b7d")
  //   },
  //   {
  //     $set: { completed : true }
  //   },
  //   {
  //     returnOriginal: false
  //   } ).then( (result ) => {
  //     console.log(result);
  //   });

    db.collection("Users").findOneAndUpdate(
      {
        _id : new ObjectID("5a8bbcf6223f571cf848f365")
      },
      {
        $set: { name : "Julius" },
        $inc: { age : 1}
      },
      {
        returnOriginal: false
      } ).then( (result ) => {
        console.log(result);
      });

  //db.close();
});
