const db = require("../models");
const passport = require("passport");

module.exports = {
    createUser: (req, res) => {
        console.log(req.body)
        db.User.create(req.body)
            .then(() => {
                console.log(`User created`)
                // res.redirect(307, "/login")
            })
            .catch(err => {
                res.status(422).json(err)
                console.log(`Error creating user`)
            })
    },

    findUser: (req, res) => {
        console.log(req.user)
        // db.User.
        //     .then(() => next())
        //     .catch(err => {
        //         res.status(422).json(err)
        //         console.log(`Error finding user`)
        //     })
    }
}