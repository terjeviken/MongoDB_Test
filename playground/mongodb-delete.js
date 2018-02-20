//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const db_host = "46.101.205.213";
const db_port = 27017;


MongoClient.connect(`mongodb://${db_host}:${db_port}/TodoApp`,(err, db )=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log(`Connected to MongoDB server: ${db_host}:${db_port}`);

  // db.collection("Todos").deleteMany({text: "Spise lunsj"}).then( ( result )=>{
  //     console.log( "Deletion succeded:\n", result );
  //     console.log( result.result.n);
  // }, ( err )=>{
  //   console.log("Err during deletion: ", err);
  // });

  // db.collection("Todos").deleteOne({text: "Wash something"}).then( ( result )=>{
  //     console.log( "Deletion succeded:\n", result );
  //     console.log( result.result.n);
  // }, ( err )=>{
  //   console.log("Err during deletion: ", err);
  // });

  db.collection("Todos").findOneAndDelete({text: "Vaske ovnen"}).then( ( result )=>{
      console.log( "Deletion succeded:\n", result );
      console.log( "Deleted: " + result.value.text);
  }, ( err )=>{
    console.log("Err during deletion: ", err);
  });

  //db.close();
});
