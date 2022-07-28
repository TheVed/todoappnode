const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

let data = [{item: 'Feed the Dog'},{item: 'Learn MERN'},{item: 'Go Shopping'}];

module.exports = (app) => {

  app.get('/todo',(req,res)=>{
    res.render('todo',{todos: data});
  });

  app.post('/todo',urlencodedParser,(req,res)=>{
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item',(req,res)=>{
    data = data.filter((todo)=>{
      let newitem = todo.item.replace(/ /g,'-');
      return (newitem !== req.params.item)
    });
    res.json(data);
  });

};
