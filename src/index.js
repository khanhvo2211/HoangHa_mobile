const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");
app.use(express.static(path.join(__dirname, "public")));
app.engine(
  ".hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//"express/connect morgan)"
app.use(morgan("combined"));

//route init
route(app);

//db connect
db.connect();

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
