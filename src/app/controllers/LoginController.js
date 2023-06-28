const User = require('../models/User')
const {multipleMongooseToObject} = require('../../util/mogoose');


class LoginController{
    
    // LOGIN function
    dangnhap(req, res,next) {
        res.render('body/login',{layout: 'log.hbs'})
    }
    
    check(req,res){
        User.find({})
            .then(user => {
                
                const emailuser = user.map(function (params) {
                    return params.email
                })
                const passworduser = user.map(function (long) {
                    return long.password
                })

                const email = req.query.email;
                const password = req.query.password;

                if(emailuser.includes(email) && passworduser.includes(password) ){
                        setTimeout(function () {
                            res.redirect('/home')
                        },3000)  
                }
                else{ 
                    
                }
    
            })

    }

}

module.exports = new LoginController;