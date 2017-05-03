const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
// 创建账号
router.post('/api/login/createAccount',(req,res) => {
    let newAccount = new models.Login({
        username : req.body.username,
        password : req.body.password
    });
    console.log(req.body)
    newAccount.save((err,data) => {
        if (err) {
            res.send({status:2,err:err});
        } else {
            res.send({status:1});
        }
    });
});
// 查询用户验证
router.post('/api/login/getAccount',(req,res) => {
    let user = {
        username : req.body.username,
        password : req.body.password
    }
    models.Login.find(user,(err,data) => {
        if (err) {
            res.send({status:3,err:err});
        } else {
            if (typeof data === 'object' && data.length > 0) {
                if (true) {}
                res.send({status:2});
            }else if (typeof data === 'object' && data.length <= 0){
                res.send({status:1});
            }else{
                res.send({status:0});
            }
        }
    });
});
router.get('/api/login/getAccount',(req,res) => {
    models.Login.find((err,data) => {
        if (err) {
            res.send({status:3,err:err});
        } else {
            res.send(data)
        }
    });
});
router.post('/api/home/getcontent',(req,res) => {
    models.Home.find(req.body,(err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
router.get('/api/class/getclass',(req,res) => {
    models.Classe.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
router.post('/api/com/getcom',(req,res) => {
    models.Commoditie.find(req.body,(err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    }).sort({info_id:1});
});

module.exports = router;
