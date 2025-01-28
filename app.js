const express = require('express');
const errorsHandler = require("./middlewares/errorsHandler");
const filmRouter = require("./routers/films")
const notFound = require("./middlewares/notFoundRoute");
const cors = require("cors");

// creazione dell'app express
const app = express();
const port = process.env.PORT;

//Middleware delle CORS
app.use(cors({
  origin: process.env.FRONTEND_URL
}))

// Middleware per rendere la cartella pubblica accessibile da fuori
app.use(express.static('public'));

//Middleware che fa il parse del json
app.use(express.json());

// DEFINISCO I GRUPPI DELLE ROTTE
app.use("/films", filmRouter);

// REGISTRO ERRORS HANDLER MIDDLEWARE
app.use(errorsHandler);

// Middleware della rotta non esistente
app.use(notFound);



app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
