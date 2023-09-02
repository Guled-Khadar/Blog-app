const router = require("express").Router()

router.get("", (req,res) => {
    const local = {
        title: "This is Index Page",
        description: "This where you can add your posts"
    }
   res.render("index", {local})
})

router.get("/about", (req,res) => {
    const local = {
        title: "This is About Page",
        description: "This where you can add your posts"
    }
    res.render("about", {local})
 })

 router.get("/contact", (req,res) => {
    const local = {
        title: "This is Contact Page",
        description: "This where you can add your posts"
    }
    res.render("contact",{local})
 })
module.exports = router