const User = require('../models/user')

class userCtrl{
    static get(req,res) {
        User.find({})
        .then((result, err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }
}

module.exports = userCtrl