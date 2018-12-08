var roter=require('express').Router();
var userController=require('../controller/userController');


router.post('/sign_up',userController.sign_up)

module.exports=router();