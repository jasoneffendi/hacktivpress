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

    static getByAuthor(req,res) {
        Article.find({author: req.params.id})
        .populate('author', 'username')
        .then((result,err) => {
            if(err) return res.send(err)

            res.send(result)
        })
    }

    static getByCategory(req,res) {
        Article.find({category: req.params.category})
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

    static put(req,res) {
        var opentoken = jwt.verify(req.body.token, 'press')
        Article.findOne({_id: req.params.id})
        .then((result,err) => {
            if(err) return res.send(err)
  
            if(result.author == opentoken.id) {
                Article.findOneAndUpdate({_id: req.params.id}, {
                    title: req.body.title,
                    content: req.body.content,
                    category: req.body.category
                })
                .then((result,err) => {
                    if(err) return res.send(err)
    
                    res.send(result)
                })
            } else {
                return res.send('You are not authorized to edit this article')                
            }
        })
    }

    static del(req,res) {
        var opentoken = jwt.verify(req.params.token, 'press')
        Article.findOne({_id: req.params.id})
        .then((result,err) => {
            if(err) return res.send(err)

            if(result.author == opentoken.id) {
                Article.findOneAndRemove({_id: req.params.id})
                .then((result,err) => {
                    if(err) return res.send(err)
    
                    res.send(result)
                })
            } else {
                return res.send('You are not authorized to edit this article')                
            }
        })
    }
    

}

module.exports = articleCtrl