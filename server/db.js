//Schema、Model、Entity或者Documents的关系请牢记，
//Schema生成Model，Model创造Entity，
//Model和Entity都可对数据库操作造成影响，
//但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/life');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => {console.log('Mongo connection successed')});
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    username : String,
    password : String
});
const homeSchema = mongoose.Schema({
    content : String
});
const classeSchema = mongoose.Schema({
    class_id : Number,
    class_name : String,
    class_info : [{
        info_id : Number,
        text : String,
        imgSrc : String
    }]
});
const comSchema = mongoose.Schema({
    com_id : Number,
    com_name : String,
    com_img : String,
    class_id : Number,
    info_id : Number,
    is_new : Boolean,
    is_recommend : Boolean,
    original_price : Number,
    present_price : Number,
    sales_count : Number,
    carousel_count: Number,
    detail_count: Number,
    create_date: String
});

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema),
    Home : mongoose.model('Home',homeSchema),
    Classe : mongoose.model('Classe',classeSchema),
    Commoditie : mongoose.model('Commoditie',comSchema)
};

module.exports = Models;