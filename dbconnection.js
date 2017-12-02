var mysql=require('mysql');
var connection=mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : 'root',
  port : 3306, //port mysql
  database : 'hackathon',
});
module.exports=connection;
