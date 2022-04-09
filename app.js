var express        = require("express"),
    app            = express();

    app.set("view engine", "ejs");
    app.use(express.static(__dirname+"/public/"));
    app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("beat");
});

app.listen(1111, () => {
    console.log(`The Server Started at Port 1111`);
});