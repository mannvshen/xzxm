const express = require('express');
const router = express.Router();
const query = require('../../config/connect_db');
const Unique = require('../common/Unique');

router.post('/create', (req, res, next) => { 
    // console.log(req); 
    let privilege=req.body.privilege || 0;
    const sql = `insert into user(id, name, password, privilege) values ('${Unique(1, 10000)}', '${req.body.name}', '${req.body.password}', '${privilege}')`;
    query.sqlHandle(sql).then(() => {
        res.send({
            code: 1,
            msg: 'success'
        }).catch((err) => {
            res.send({
                code: 0,
                msg: 'fail',
                err
            })
        })
    })
})
router.post('/login', (req, res, next) => {
    const sql = `select * from user where name = '${req.body.name}'`;
    query.query(sql).then((data) => {
        if (data.length === 1) {
            if (data[0].password === req.body.password) {
                res.send({
                    code: 3,
                    msg: 'loginOk'
                })
            } else {
                res.send({
                    code: 4,
                    msg: 'pwd错误'
                })
            }
        }
        if (data.length === 0) {
            res.send({
                code: 2,
                msg: 'noExits',
                
            })
            return
        }
    })
})

router.post('/test', (req, res, next) => {
    const sql = `select id from user where id = '${req.body.id}'`;
    query.searchHandle(sql).then((data) => {
        if (data.length > 0) {
            res.send({
                code: 4,
                msg: '此用户已经存在'
            })
        }
    }).catch((err) => {
        res.send({
            code: 5,
            msg: '用户id不存在',
            err
        })
    })
})
module.exports=router;