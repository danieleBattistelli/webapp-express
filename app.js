const express = require('express');
const errorsHandler = require("./middlewares/errorsHandler");
const filmRouter = require("./routers/films")
const notFoundRoute = require("./middlewares/notFoundRoute");

// creazione dell'app express
const app = express();
const port = process.env.PORT;

// Middleware per rendere la cartella pubblica accessibile da fuori
app.use(express.static('public'));

// DEFINISCO I GRUPPI DELLE ROTTE
app.use("/films", filmRouter);

// REGISTRO ERRORS HANDLER MIDDLEWARE
app.use(errorsHandler);

// REGISTRO not found MIDDLEWARE
app.use(notFoundRoute);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
