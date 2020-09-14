let express = require('express');

let cookieSession = require("cookie-session");

// //静态资源托管(这里写的是你存放静态资源的路径)
// app.use(express.static("./public"))

//消息体解析中间件
var bodyParser = require('body-parser')
//实例化 
let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
//extended为false表示使用querystring来解析数据，这是URL-encoded解析器
// parse application/json 
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Allow-Content-Type", "*");
  next();
})

//简单设置首页
app.get("/", (req, res) => {
    res.send("test api")
  })

//设置监听端口号
app.listen(3000, () => {
    console.log('server start:', "http://10.0.2.2:3000/index");
  })

  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');
  const { request } = require('http');
const { json } = require('express');
  // Connection URL
  const url = 'mongodb://localhost:27017';



//数据查询
app.get('/index', async (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("user");
      dbo.collection("users").find({}).toArray(function (err, result) {
        if (err) throw err;
        res.send({ result });
        console.log(result)
        db.close();
      
      })
    })

 })


//用户名唯一
app.post('/judgeusername', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    
    dbo.collection("KouXiangTang").find({
      "username":req.body.judgeusername,
    }).toArray(function (err, result) {
      if (result=="")
      {
          // res.send("true");
          res.json({code:200,msg:"true"});
          console.log(json.code);
          
      }else
      {
          // res.send("false");
          res.json({code:400,msg:"false"});
      }
      console.log(result);
      db.close(); 
    })
  })

})

// 手机用户名密码数据存储
app.post('/insert', async (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
      if (err) throw err; 
      var dbo = db.db("user");
      // var myobj =req.body.response;
      console.log("req.body+"+req.body)
      var myobj =req.body;
      dbo.collection("KouXiangTang").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        console.log(111)
        db.close();
      });
    })
  });



// 个人信息数据存储
app.post('/insertgerenxx', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err; 
    var dbo = db.db("user");
    // var myobj =req.body.response;
    console.log("req.body+"+req.body)
      var myobj =req.body;
      dbo.collection("KouXiangTangxx").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        console.log(123);
        db.close();
      });
    })
  });

  // app.get('./test', async (req, res) => {

  // })



  //数据查询所有用户
app.get('/index/KouXiangTang', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    dbo.collection("KouXiangTang").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.send({ result });
      console.log(result)
      db.close();
    
    })
  })

})


//关注页面数据
app.get('/index/guanzhu', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    dbo.collection("guanzhu").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.send({ result });
      console.log(result)
      db.close();
    
    })
  })
})

//登录接口
app.post('/login', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    
    dbo.collection("KouXiangTang").find({
      "username":req.body.username,"password":req.body.password,
    }).toArray(function (err, result) {
      if (result=="")
      {
          // res.send("false");
          res.json({code:400,msg:"false"});
          
      }else
      {
          // res.send("true");
          res.json({code:200,msg:"true"});
          console.log(json.code);
          
      }
      
      
      console.log(result);
      db.close(); 
    })
  })

})

//判断登录状态
app.post('/judgelogin', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    
    dbo.collection("KouXiangTang").find({
      "loginstate":"true",
    }).toArray(function (err, result){
      if (result=="")
      {
          // res.send("false");
          res.json({code:400,msg:"false"});
      }else
      {
          // res.send("true");
          res.json({code:200,msg:"true",userstate:result[0],username:result[0].username });
          console.log(json.code);
      }
      console.log(result);
      db.close();
    })
  })

})



//保持登录状态
app.post('/savelogin', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    var whereStr={"username":req.body.username};
    var updateStr={$set:{"loginstate":"true"}};
    dbo.collection("KouXiangTang").updateOne(whereStr,updateStr,function(err,res){
      if(err) throw err;
        console.log("文档更新成功");   
      db.close(); 
    }) 
  })
})


//退出登录状态
app.post('/exitlogin', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    var whereStr={"loginstate":"true"};
    var updateStr={$set:{"loginstate":"false"}};
    dbo.collection("KouXiangTang").update(whereStr,updateStr,function(err,res){
      if(err) throw err;
      console.log("文档更新成功");
      db.close(); 
    }) 
  })
})


//关注细节页面数据
// app.post('/guanzhuxijie', async (req, res) => {
//   MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("user");
//     dbo.collection("guanzhu").find({
//       "username":req.body.username,
//     }).toArray(function (err, result) {
//       if (err) throw err;
//       res.json({result});
//       res.send({ result });
//       console.log(result);
//       db.close();
//     })
//   })
// })




//个人中心页面数据
app.post('/personal', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    dbo.collection("KouXiangTangxx").find({
      "username":req.body.username
    }).toArray(function (err, result) {
      if (err) throw err;
      res.send({ result });
      console.log(result);
      db.close();
    
    })
  })
})


//修改头像
app.post('/change_toux', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    var whereStr={"username":req.body.username};
    var updateStr={$set:{"toux":req.body.toux}};
    dbo.collection("KouXiangTangxx").updateOne(whereStr,updateStr,function(err,res){
      if(err) throw err;
      console.log("头像更新成功");
      db.close(); 
    }) 
  })
})


// 帖子发布数据存储
app.post('/publish_to_administrator', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err; 
    var dbo = db.db("user");
    // var myobj =req.body.response;
    console.log("req.body+"+req.body)
      var myobj =req.body;
      dbo.collection("publish_to_administrator").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("帖子发送成功");
        console.log("publish_to_administrator");
        db.close();
      });
    })
  });

//待审核帖子数据
app.post('/zuoping_wei', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    dbo.collection("publish_to_administrator").find({
      "simi":"所有人可见",
      "promise":false,
    }).toArray(function (err, result) {
      if (err) throw err;
      res.send({ result });
      console.log(result);
      db.close();
    
    })
  })
})

//已过审帖子数据
app.post('/zuoping_yi', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    dbo.collection("publish_to_administrator").find({
      "simi":"所有人可见",
      "promise":true,
    }).toArray(function (err, result) {
      if (err) throw err;
      res.send({ result });
      console.log(result);
      db.close();
    
    })
  })
})

//作品审核通过
app.post('/sh_get', async (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("user");
    var whereStr={
      "username":req.body.username,
      "title":req.body.title,
      };
    console.log(whereStr)
    var updateStr={$set:{"promise":true}};
    dbo.collection("publish_to_administrator").updateOne(whereStr,updateStr,function(err,res){
      if(err) throw err;

        console.log("审核通过成功");   
      db.close(); 
    }) 
  })
})