import express from "express"
import indexRoutes from "./Routes/index.rautes"
import exphbs from "express-handlebars"
import path from "path"

const app = express()

//Routes
app.use(indexRoutes)

app.set("views", path.join(__dirname, "views"));

app.engine(".hbs"
,exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main.hbs",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

export default app;