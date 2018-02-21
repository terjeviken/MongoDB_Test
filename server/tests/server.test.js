const  expect = require("expect");
const request = require("supertest");
const {ObjectID} = require("mongodb");

const {app} = require("./../server");
const {Todo} = require("./../models/todo")


var todos = [
  { _id: new ObjectID(), text: "First todo-item" },
  { _id: new ObjectID(), text: "Second todo-item"}

];


// Ensure database Todos empty before each run
beforeEach( (done) =>{
  Todo.remove({}).then( ()=>{
    return Todo.insertMany(todos); // return for chaining
  }).then(() => done());
});

describe("POST /todos", ()=>{

  it("Should create a new todo", (done) => {
      var text = "Test generated todo";
      request(app)
        .post("/todos")
        .send({text})
        .expect(200)
        .expect((res)=>{
          expect(res.body.text).toBe( text );
        })
        .end( (err, res)=>{
          if (err){
            return done(err);
          }

          Todo.find({text}).then((todos) =>{
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          }).catch((e) => done(e)); // end todo find then

        }); // end reequest.end
  }); // end it

  it("Should not create todo with invalid body data", (done) => {
      request(app)
        .post("/todos")
        .send({})
        .expect(400)
        .end( (err, res) => {
            if (err){
              return done(err);
            }

            Todo.find().then( (todos) =>{
              expect(todos.length).toBe(2);
              done();
            }).catch((e) => done(e));
        }); // end
  }); // it

}); // describe

describe("GET /todos",()=>{

  it("Should get all todos", (done)=>{
      request(app)
        .get("/todos")
        .expect(200)
        .expect( (res)=>{
          expect(res.body.todos.length).toBe(2);
        })
      .end(done);
  }); // it

}); // describe get todos


describe("GET /todos/:id",()=>{

  it("Should return todo doc", (done)=>{
      request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect( (res)=>{
          expect(res.body.todo.text).toBe(todos[0].text);
        }) // expect
        .end(done);
  }); // it

  it("Should return 404 if invalid id format", (done)=>{
      request(app)
      .get(`/todos/1234`)
        .expect(404)
        .end(done);
  });   // it

  it("Should return 404 if id valid, but no match in collection", (done)=>{
      request(app)
      .get(`/todos/${new ObjectID().toHexString()}`)
        .expect(404)
        .end(done);
  });   // it

}); // describe
