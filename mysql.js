const mysql = require('mysql');

const sql = `select User from user`;

const connection = mysql.createConnection({
  host: '106.14.148.37', // 填写你的mysql host
  user: 'root', // 填写你的mysql用户名
  password: '11111111', // 填写你的mysql密码
  database: 'mysql'
})

connection.connect(err => {
  if(err) throw err;
  console.log('mysql connncted success!');
})


connection.query(sql, (err ,results, filelds) => {
  if (err) throw err;
  console.log(results);
})