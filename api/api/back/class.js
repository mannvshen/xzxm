const express = require('express');
const router = express.Router();
const Unique = require('../common/Unique');
const createTime = require('../common/creatTime');
const {
    sqlHandle,
    readHandle,
    searchHandle,
    query
} = require('../../config/connect_db');

// 增 删 改 查

// 添加类名
router.post('/insertOneClass', (req, res, next) => {
    const oneid = Unique();
    // 一级分类英文标志查询
    const sqltest1 = `select * from one_class where enname = '${req.body.enname_one}'`;
    const sqltest2 = `select * from two_class where enname = '${req.body.enname_two}'`;

    // // 添加一级类名
    const sqlinsert1 = `insert into one_class(id, enname, cnname, time) values('${oneid}', '${req.body.enname_one}', '${req.body.cnname_one}', '${createTime()}')`;
    // // 添加二级类名
    const sqlinsert2 = `insert into two_class(id, parent_id, enname, cnname, article_num, time) values('${Unique()}', '${oneid}' '${req.body.enname_two}', '${req.body.cnname_two}', 0, '${createTime()}')`;

    // // 创建表
    const createTable = `CREATE TABLE ${req.body.enname_one} (LIST INT(11) UNIQUE NOT NULL AUTO_INCREMENT, id VARCHAR(255) UNIQUE PRIMARY KEY, oneId VARCHAR(255), twoId VARCHAR(255), article_name VARCHAR(255), editer VARCHAR(255), content LONGTEXT, time DATETIME, visitors INT, daodu VARCHAR(255), imgsrc VARCHAR(255), recommend TINYINT, art_show TINYINT);`;
    
    Promise.all([searchHandle(sqltest1), searchHandle(sqltest2), query(sqlinsert1), query(sqlinsert2), query(createTable)]).then((data) => {
        res.send({
            code: 1112,
            msg: '插入数据成功',
            data
        });
    }).catch((err) => {
        res.send({
            code: 1112,
            msg: '插入数据失败',
            err
        });
    })
})

// 删除分类列表

router.post('/deleteOneClass', (req, res, next) => {
    const sqlOne = `delete from one_class where id = '${req.body.id}'`;
    const sqlTwo = `delete from two_class where id = '${req.body.id}'`;
    const sqlTABLE = `drop TABLE ${req.body.enname_one}`;
    Promise.all([searchHandle(sqlOne), searchHandle(sqlTwo), searchHandle(sqlTABLE)]).then((data)=>{
        res.send({
            code:"2111",
            msg:"数据删除成功",
            data
        })
    }).catch((err)=>{
        res.send({
            code:"2112",
            msg:"数据删除失败",
            err
        })
    })
    // const asyneDelete = async function(params) {
    //     const deleteOne = await searchHandle(sqlone);
    //     const deleteTwo = await searchHandle(sqlTwo);
    //     const deleteTABLE = await searchHandle(sqlTABLE);
    //     return ok;
    // }
    // asyneDelete().then((data) => {
    //     res.send({
    //         code: 2011,
    //         msg: '删除成功',
    //         data
    //     })
    // }).catch((err) => {
    //     res.send({
    //         msg: 2022,
    //         msg: '删除失败',
    //         err
    //     })
    // })
})

// 修改列表

// 修改一级类名
router.post("/updateClassOne",(req,res,next)=>{
   // 修改一级分类
    var updatesql = `update one_class set enname='${req.body.enname_one}',cnname='${req.body.cnname_one}',time='${createTime()}' where id='${req.body.id}'`;
    // 修改文章表
    var updateTable = `alter table ${req.body.oldenname_one} rename ${req.body.enname_one}`;
    Promise.all([searchHandle(updatesql), query(amendTable)]).then((data) => {
        res.send({
            code:"1137",
            msg:"一级分类修改成功"
        })
    }).catch((err) => {
        res.send({
            code:"1138",
            msg:"一级分类修改失败",
            err
        })
    })
  
})


// 修改二级类名
router.post("/amendClassTwo",(req,res,next)=>{
  // 修改二级分类
    var updatesql = `update two_class set enname='${req.body.enname}',cnname='${req.body.cnname}',time='${creatTime()}' where id='${req.body.id}'`
    console.log(updatesql)
    sqlHandle(updatesql).then((data)=>{
        res.send({
            code:"1139",
            msg:"二级分类修改成功"
        })
    }).catch((err)=>{
        res.send({
            code:"1140",
            msg:"二级分类修改失败",
            err
        })
    })
})


// 获取分类列表

router.get('/getClassList', (req, res, next) => {
    const sqlOne = `select * from one_class`;
    const sqlTwo = `select * from two_class`;
    Promise.all([readHandle(sqlOne), readHandle(sqlTwo)]).then((data) => {
        let classOneList = data[0];
        let classTwoList = data[1];
        classOneList.forEach((i) => {
            let result = [];
            let obj = {
                oneClass: i,
                twoClass: []
            };
            classTwoList.forEach((j) => {
                if (i.id === j.parent_id) {
                    obj.twoClass.push(j);
                }
                result.push(obj);
            })
        })
        res.send({
            code: 1131,
            msg: '数据获取成功',
            data: result
        })
    }).catch((err) => {
        res.send({
            code: 1132,
            msg: '数据获取失败',
            err
        })
    })
})

module.exports = router;
