const express = require("express")
const port = 4000
const app = express()
const path = require("path")
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
const sectionSched = require("../router/viewsection")
app.use("/styles", express.static(path.join(__dirname, "../styles")));
app.use("/images", express.static(path.join(__dirname, "../images")));
app.use("/js", express.static(path.join(__dirname, "../js")));

app.use("/", sectionSched)

app.get("/", (req, res)=>{
    res.render("schedulepage");
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})