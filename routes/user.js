const router = require("express").Router();

router.get("/usertest",(req,res)=>{
    res.send("user test is success")
});

router.post("/userpostest", (req,res)=>{
    const username = req.body.username
    console.log(username);
});

module.exports = router;