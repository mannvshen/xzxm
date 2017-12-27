const express = require('express');
const router = express.Router();
const dbquery = require('../../config/connect_db');
const createTime = require('../common/createTime');

router.post('/login', (req, res, next) => {
    console.log(req.body);
})
router.get('/test', (req, res, next) => {
    
})









