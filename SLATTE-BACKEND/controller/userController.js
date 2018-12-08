var userSchema = require('../model/user');
var bcrypt = require('bcrypt-nodejs')


var  sign_up = (req, res) => {


    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var hash = bcrypt.hashSync(password);
    var gender = req.body.gender;

    var userData = new userSchema({

        "name": name,
        "email": email,
        "password": hash,
        "gender": gender

    });


    userData.save((err, result) => {

        if (err) {

            res.json({
                responseCode: 400,
                responseMessege: 'Error',
                error: err

            })

        } else {


            res.json({
                responseCode: 200,
                responseMessege: 'successfully Signup',
                result:result



            });

        }


    });
};

var user_detail = (req, res)=>{

    var userId = req.body.userId;

    userSchema.findById({'_id':userId},{password:0},(err,result)=>{
        if(err){
            res.json({
                responseCode:400,responseMessege:"Error found",error:err
            })
        }
        else{
            res.json({
                responseCode:200,
                responseMessege:'Data found sucessfully !!',
                data:result
            })
        }
    })
}

module.exports = {
    sign_up,
    user_detail
}



// const api={
//     'sign_up':(req,res)=>{



//     }
// }

// module.exports=api;