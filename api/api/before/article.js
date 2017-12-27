const express = require('express');
const router = express.Router();
var generateUUID = require("../common/Unique")
var creatTime = require("../common/creatTime")
const moment = require('moment'); //数据库时间转js时间格式
const {
    query,
    sqlHandle,
    readHandle,
    searchHandle
} = require('../../config/db_connect');
router.get('/', (req, res, next) => {
    const sql = `select * from jishu`;
    readHandle(sql).then((data) => {
        res.send({
            code: '1010',
            data
        });
    }).catch((err) => {
        res.send({
            code: '1011',
            err
        })
    })
})

router.get('/apilist', (req, res, next) => {
    const sql = `select * from apilist`;
    readHandle(sql).then((data) => {
        res.send({
            code: '1020',
            data
        });
    }).catch((err) => {
        res.send({
            code: '1021',
            err
        })
    })
})

router.get("/getNav", function(req, res, next) {
    var sqlone = "select * from one_class"
    var sqltwo = "select * from two_class"
    const asyncGetClass=async function(){
        let oneClass=await  readHandle(sqlone)
        let twoClass=await  readHandle(sqltwo)

        return {oneClass,twoClass}
    }

    asyncGetClass().then((data)=>{
        let resdata = []
        const {oneClass,twoClass}=data
        oneClass.forEach(function(i) {
            let everydata = {
                onedata: i,
                twodata: []
            }
            twoClass.forEach(function(j) {
                if (i.id == j.parent_id) {
                    everydata.twodata.push(j)
                }
            })

            resdata.push(everydata)
        })
        console.log(resdata)
        res.send({
            code: "6010",
            data: resdata,
            msg: "查询成功"
        })
    }).catch((err)=>{
        res.send({
            code: "6011",
            data: null,
            msg: "查询失败"
        })
    })
})
router.post("/getClassTwo", function(req, res, next) {
    var sql = `select * from two_class where parent_id='${req.body.oneId}'`
    readHandle(sqlone).then((data)=>{
        res.send({
            code: "6020",
            msg: "数据查询成功",
            data
        })
    }).catch((err)=>{
        res.send({
            code: "6021",
            msg: "数据查询失败"
        })
    })
})
module.exports = router;