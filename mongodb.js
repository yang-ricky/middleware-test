// 引入模块
const MongoClient = require('mongodb').MongoClient;

// MongoDB 服务器的地址
const url = 'mongodb://root:11111111@106.14.148.37:27017/admin';

// 目标数据库的名字
const dbname = 'mongodbtest';

// 创建 MongoDB 客户端
const client = new MongoClient(url);

// 让客户端连接上服务器
client.connect(function(err, db) {
    if (err) throw err;

    console.log("成功连接到 MongoDB 服务器!");

    // 创建数据库实例
    const database = client.db(dbname);

    // 断开连接 
    client.close();
});