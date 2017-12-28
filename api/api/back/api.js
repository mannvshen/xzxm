const express = require('express');
const router = express.Router();
const {
    sqlHandle,
    readHandle,
    searchHandle,
    query
  } = require('../../config/connect_db');
const Unique = require('../common/Unique');
const createTime = require('../common/creatTime');
router.post('/insert', (req, res, next) => {
    // id title url type sendparams getparams backorfont time
    var sql = `insert into apilist(id,title,url,type,sendparams,getparams,backorfont,time) values('${Unique()}','${req.body.title}','${req.body.url}','${req.body.type}','${req.body.sendparams}','${req.body.getparams}','${req.body.backorfont}','${createTime()}';)`;
    query(sql).then((data) => {
        res.send({
            code: 11,
            msg: '数据插入成功'
        })
    }).catch((err) => {
        res.send({
            code: 12,
            msg: '数据插入失败',
            err
        })
    })
})

router.post('/update', function(req, res, next) {
    const sql = `update apilist set title='${req.body.title}',url='${req.body.url}',type='${req.body.type}',sendparams='${req.body.sendparams}',getparams='${req.body.getparams}',backorfont='${req.body.backorfont}',time='${createTime()}' where id='${req.body.id}'`
    searchHandle(sql).then((data)=>{
        res.send({
            code:31,
            msg:"数据更改成功",
        })
    }).catch((err)=>{
        console.log(err)
        res.send({
            code:32,
            msg:"数据更改失败",
            err:err
        })
    })
});

router.post('/deleted', (req, res, next) => {
    const sql = `delete from applist where id='${req.body.id}'`;
    query(sql).then((data) => {
        res.send({
            code: 41,
            msg: sql
        })
    }).catch((err)=>{
        res.send({
            code: 42,
            msg: '删除数据失败',
            err
        })
    })
})


module.exports = router;


