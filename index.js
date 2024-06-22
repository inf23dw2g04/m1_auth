const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");

const config = require ("./config/env.js");
const passport = require("./middlewares/passport");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./Controllers/swagger-controller");
const routes = require("./routes/Routes");

const sessionOptions = {
    secret: "api_tasks",
    resave: false,
    saveUninitialized: true,
};

const app = express();

//module.exports = session(sessionOptions);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// Rotas
//app.use("/auth", require("./routes/auth"));
//app.use("/routes", require("./routes/Routes"));

app.get("/docs/swagger.json", (req, res) => res.json(swaggerSpec));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//const auth = require("./middlewares/auth");

//app.get("/", auth, (req, res) => {
//    res.sendFile(__dirname + "/public/protected.html");
//});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

app.use('/', routes);

// Inicializar o servidor
app.listen(config.port, function () {
    console.log(`app running on localhost:${config.port}`);
});
