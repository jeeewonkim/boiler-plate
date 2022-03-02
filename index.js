const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
//모델 불러오기
const { User } = require("./models/User");
const mongoose = require('mongoose');
const config = require('./config/key');

//application/x-www-form-urlencoded 형태를 읽어올 수 있도록 하는 것
app.use(bodyParser.urlencoded({ extended: true }));

//application/json type으로 된 것을 분석해서 가져올 수 있도록 한 것
app.use(bodyParser.json());

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! nodemonver')
})

app.post('/register', (req, res) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면 데이터베이스에 넣어준다.

  const user = new User(req.body);

  //mongoDB에서 저장해주는 형태
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
      //성공했음을 의미
    })
  })


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})