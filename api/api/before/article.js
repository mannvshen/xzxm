const express = require('express');
const router = express.Router();
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

module.exports = router;