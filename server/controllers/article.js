const jwt = require('jsonwebtoken')
const Article = require('../models/article')

class articleCtrl{
    static get(req,res) {
        Article.find({})
        .populate('author', 'username')
        .then((result, err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }

    static getOne(req,res) {
        Article.findOne({_id: req.params.id})
        .populate('author', 'username')
        .then((result,err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }

    static post(req,res) {
        var opentoken = jwt.verify(req.body.token, 'press')

        var newArticle = new Article({
            author: opentoken.id,
            title: req.body.title,
            content: req.body.content,
            category: req.body.category
        })

        newArticle.save()
        .then((result,err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }
    

}

module.exports = articleCtrl