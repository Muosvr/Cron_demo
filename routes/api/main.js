const express = require("express");
const router = express.Router();
const mainWorker = require('../../workers/mainWorker');
const adderWorker = require('../../workers/adderWorker');

router.get("/", (req, res) => res.json({status:"main route"}));

router.get("/start", (req, res) => {
    if (mainWorker.running){
        return res.json({status: "worker already running"});
    }
    mainWorker.start();
    res.json({status:"started worker"});
});

router.get("/stop",(req, res) => {
    if(!mainWorker.running){
        return res.json({status: "worker not running"});
    }
    mainWorker.stop();
    res.json({status: "stopped worker"});
});

router.get("/start", (req, res) => {
    if
});


module.exports = router;