
var express= require('express')
var router= express.Router()

router.get('/',(req,res)=>
{
    res.status(200).json({
        message:"successfully get the item"
    })
})

router.post('/',(req,res)=>
{
    const name= req.body.name
    console.log('body '+name)
    res.status(200).json({
        message:"successfully post the item"
    })
})

module.exports = router


