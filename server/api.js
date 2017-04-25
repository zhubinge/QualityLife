const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
// 这里的req.body能够使用就在index.js中引入了
// const bodyParser = require('body-parser')
    let newAccount = new models.Login({
        account : req.body.account,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});
// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
router.post('/api/home/getContent',(req,res) => {
    // 通过模型去查找数据库
    let obj = {
        content : req.body.content
    }
    models.Home.find(obj,(err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
router.get('/api/class/getClass',(req,res) => {
    models.Classe.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
router.post('/api/com/setcom',(req,res) => {
    let newSetCom = new models.Login({
        com_id : req.body.com_id,
        com_name : req.body.com_name,
        com_img : req.body.com_img,
        class_id : req.body.class_id,
        info_id : req.body.info_id,
        is_new : req.body.is_new,
        is_hot : req.body.is_hot,
        original_price : req.body.original_price,
        present_price : req.body.present_price,
        sales_count : req.body.sales_count
    });
    newSetCom.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
router.get('/api/com/getcom',(req,res) => {
    models.Commoditie.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});



module.exports = router;