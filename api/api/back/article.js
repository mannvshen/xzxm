const express = require('express');
const router = express.Router();
var generateUUID = require("../common/Unique");
var creatTime = require("../common/creatTime");
const {sqlHandle,readHandle,searchHandle,query} = require('../../config/connect_db');

//插入数据
router.post('/insert', (req,res) => {
    const updateSql = `update two_class set article_num=article_num+1 where id='${req.body.twoId}'`
    const sqlInsert = `insert into ${req.body.enname} (id, oneId, twoId, article_name, editer, content, TIME, visitors, daodu, imgsrc, recommend, art_show, enname_one, cnname_one, enname_two, cnname_two) values ('${generateUUID()}','${req.body.oneId}','${req.body.twoId}','${req.body.article_name}','${req.body.editer}','${req.body.content}','${req.body.time}',0,'${req.body.daodu}','${req.body.imgsrc}','${req.body.recommend}','${req.body.art_show}','${req.body.enname_one}','${req.body.cnname_one}','${req.body.enname_two}','${req.body.cnname_two}')`
    asyncInsert = async function () {
        await query(updateSql)
        await query(sqlInsert)
        return 'ok'
    }
    asyncInsert().then((data) => {
        res.send({
        code: '1113',
        msg: '插入文章成功'
        })
    }).catch((err) => {
        res.send({
        code: '1114',
        msg: '插入文章失败',
        err
        })
    })
})

//获取文章列表接口
router.post('/getClassList',(req,res) => {
    const sqlOne = `select * from one_class`
    asyncGetList = async function () {
      const tableName = await readHandle(sqlOne)
      var selectArtSql = `select * from (`
      tableName.forEach((i,index) => {
        if (index < (tableName.length - 1)) {
          selectArtSql += `select * from ${i.enname} UNION ALL `
        } else {
          selectArtSql += ` select * from ${i.enname})as tabel_all order by time desc` 
        }
      })
      return await readHandle(selectArtSql)
    }
    asyncGetList().then((data) => {
      res.send({
        code: '1115',
        msg: '获取文章成功',
        data
      })
    }).catch((err) => {
      res.send({
        code: '1116',
        msg: '获取文章失败',
        err
      })
    })
})

//获取一、二级菜单接口
router.get('/class',(req,res) => {
    const sqlOne = `select * from one_class`
    const sqlTwo = `select * from two_class`
    asyncClass = async function () {
        const classListOne = await readHandle(sqlOne)
        const classListTwo = await readHandle(sqlTwo)
        return {classListOne,classListTwo}
    }
    asyncClass().then((data) => {
        res.send({
        code: '1111',
        msg: '获取数据成功',
        data
        })
        }).catch((err) => {
        res.send({
            code: '1112',
            msg: '获取数据失败',
            err
        })
    })
})

//修改文章接口
router.post('/update',(req,res) => {
    const updateSql = `update ${req.body.enname} set article_name='${req.body.article_name}', editer='${req.body.editer}', content='${req.body.content}', TIME='${req.body.time}', daodu='${req.body.daodu}', imgsrc='${req.body.imgsrc}', recommend='${req.body.recommend}', art_show='${req.body.art_show}' where id='${req.body.id}'`
    query(updateSql).then((data) => {
      res.send({
        code: '1115',
        msg: '修改文章成功'
      })
    }).catch((err) => {
      res.send({
        code: '1116',
        msg: '修改文章失败',
        err
      })
    })
  })

  //删除文章接口
router.post('/delete',(req,res) => {
    const selSql = `select * from one_class where id='${req.body.oneId}'`
    const updateSql = `update two_class set article_num=article_num-1 where id='${req.body.twoId}'`
    query(selSql).then((data) => {
      const deleteSql = `delete from ${data[0]['enname']} where id='${req.body.id}'`
      query(deleteSql).then(() => {
        query(updateSql).then(() => {
          res.send({
            code: '1151',
            msg: '文章删除成功'
          })
        })
      }).catch((err) => {
        res.send({
          code: '1152',
          msg: '文章删除失败'
        })
      })
    }).catch((err) => {
      res.send({
        code: '1112',
        msg: '获取数据失败',
        err
      })
    })
})
module.exports = router;