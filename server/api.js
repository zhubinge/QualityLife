const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
// 创建账号
router.post('/api/login/createAccount',(req,res) => {
    let newAccount = new models.Login({
        username : req.body.username,
        password : req.body.password,
        tel : req.body.tel
    });
    newAccount.save((err,data) => {
        if (err) {
            res.send({status:2,err:err});
        } else {
            res.send({status:1,data:data});
        }
    });
});
// 查询用户验证
router.post('/api/login/getAccount',(req,res) => {
    console.log(req.body)
    models.Login.find(req.body,(err,data) => {
        console.log(data)
        if (err) {
            res.send({status:3,err:err});
        }else {
            if (typeof data === 'object' && data.length > 0) {
                res.send({status:2});
            }else if (typeof data === 'object' && data.length <= 0){
                res.send({status:1});
            }else{
                res.send({status:0});
            }
        }
    });
});
router.post('/api/cart/createCom',(req,res) => {
    let newCart = new models.Cart({
        username : req.body.username,
        commodity : req.body.commodity
    });
    newCart.save((err,data) => {
        if (err) {
            res.send({status:2,err:err});
        } else {
            console.log('create--' + data)
            res.send({status:1});
        }
    });
});
router.post('/api/cart/getCom',(req,res) => {
    let username = req.body.username
    let commodity = req.body.commodity
    models.Cart.find(username,(err,data) => {
        if (err) {
            res.send({status:3,err:err});
        } else {
            console.log('get--' + data)
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
