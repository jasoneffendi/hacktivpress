const jwt = require('jsonwebtoken')
const User = require('../models/user')

class userCtrl{
    static get(req,res) {
        User.find({})
        .then((result, err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }

    static getOne(req,res) {
        var opentoken = jwt.verify(req.body.token)
        User.findOne({_id: opentoken.id})
        .then((result,err) => {
            if(err) return res.send(err)

            res.send(result._id)
        })
    }

    static post(req,res) {
        var newUser = new User(req.body)

        newUser.save()
        .then((result,err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }

    static login(req,res) {
        User.findOne({username: req.body.username})
        .then((result,err) => {
            if(result.password === req.body.password) {
                var obj = {
                    id: result._id,
                    username: result.username
                }
                var token = jwt.sign(obj, 'press')                
                res.send(token)
            }
        })
    }
}

module.exports = userCtrl