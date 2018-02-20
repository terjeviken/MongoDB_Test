//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const db_host = "46.101.205.213";
const db_port = 27017;


MongoClient.connect(`mongodb://${db_host}:${db_port}/TodoApp`,(err, db )=>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log(`Connected to MongoDB server: ${db_host}:${db_port}`);

  db.collection('Users').insertOne({
    name: 'Terje',
    age: 50,
    location: 'Florø'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  // db.collection('Todos').insertOne({
  //   text: 'Wash something',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert task', err);
  //   }
  //
  //   console.log(result.ops);
  // });

  db.close();
});
