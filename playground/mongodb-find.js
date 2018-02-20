//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const db_host = "46.101.205.213";
const db_port = 27017;


MongoClient.connect(`mongodb://${db_host}:${db_port}/TodoApp`,(err, db )=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log(`Connected to MongoDB server: ${db_host}:${db_port}`);
  // console.log('Connected to MongoDB server');
  // db.collection('Users').insertOne({
  //   name: 'Terje',
  //   age: 50,
  //   location: 'Florø'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.collection('Todos').find({completed: true}).toArray().then( (docs)=>{
    console.log("Todo-list");
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      return console.log("Error returning todo-list: " + err);
  });

  //db.close();
});
