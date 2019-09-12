const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
 var bodypa = bodyParser.json();


 mongoose.connect('mongodb+srv://test:test@cluster0-hrbsy.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true});
 //schema
 var todoSchema = new mongoose.Schema({
     item:String
 });

 //model
 let Todo = mongoose.model('Todo',todoSchema);

//  let itemOne = Todo({
//      item:'prince kumar'
//  }).save((err)=>{
//      if(err) throw err;
//      console.log('item saved');
//  })




module.exports = (app)=>{
//     var data = [ {item:'get milk' },
//     {
//         item:'get gf '},
//     {
//         item:'get cats' }
// ]
app.use(bodyParser.json());
app.use(cors());
    app.get('/',(req,res)=>{
 Todo.find({},(err,data)=>{
     if(err) throw err;
     res.render('todo',{todos:data});

 })
    })
    
    app.post('/todo',(req,res)=>{
        var newTodo = Todo(req.body).save((err,data)=>{
            if(err) throw err;
            res.json(data);
     })
     })

    app.delete('/todo/:item',(req,res)=>{
        //delete 
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove((err,data)=>{
            if(err) throw err;
            res.json(data)
        })
         
    })

}