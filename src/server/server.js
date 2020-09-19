const express= require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'assign1'
});


app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'10mb'
})); 
app.use(bodyParser.json({limit:'10mb'}));



app.post('/login',(req,res)=>{
   var email = req.body.email;
    var pass = req.body.pass;
    var info= {email,pass}
    res.send(info);
    });

app.get("/getCity",(req,res)=>{
    var query1 = "select * from city";
    connection.query(query1,(err,result)=>{
        
        res.send(result);
    }) 
})

app.get("/getArea",(req,res)=>{
    var query1 = "select * from area";
    connection.query(query1,(err,result)=>{
        res.send(result);
    }) 
})
 
app.post('/register',(req,res)=>{ 
      var name = req.body.name;
      var dob = req.body.dob;
      var country = req.body.country;
      var city = req.body.city;
      var area = req.body.area;
      var images = req.files.image;
      var time = req.body.time;
      var filename = req.files.image.name;
  
   var sql = `insert into user(name,dob,country,city,area,image) values("${name}","${dob}","${country}","${city}","${area}","${time}".jpg)`;
    
    connection.query(sql,(err,result) =>{
    if (err) throw err;
	       res.send(result);
        });
 
    
    images.mv(`./../public/${time}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ file: `public/${filename}.jpg` });
  });
   });



app.listen(4200,() => console.log('Server is running at port 4200'));