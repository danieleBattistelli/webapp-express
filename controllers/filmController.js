const connection = require("../data/db")

//INDEX

const index = (req, res, next) => {
  const sql = "SELECT * FROM `movies`";

  connection.query(sql, (err, films) => {
    if (err) {
      return next(new Error(err.message));
    }

    return res.status(200).json({
      status: "success",
      data: films,
    });
  });
};

//SHOW
const show = (req, res, next) => {
  const id = req.params.id;

  const sql = "SELECT * FROM `movies` WHERE id = ?";
  const sqlReviews = `
      SELECT reviews.* 
      FROM reviews
      JOIN movies
      ON movies.id = reviews.movie_id
      WHERE movies.id = ?
    `;

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return next(new Error("Errore interno del server"));
    }

    // Controllare se la corrispondeza è stata trovata
    if (results.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "film non trovato",
      });
    }

    // Nel caso tutto ok, prendiamo anche le recensioni collegati 
    // a questo film
    connection.query(sqlReviews, [id], (err, reviews) => {
      if (err) {
        return next(new Error("Errore interno del server"));
      }

      return res.status(200).json({
        status: "success",
        data: {
          ...results[0],
          reviews,
        },
      });
    });
  });
};

// STORE
const store = (req, res, next) => {
  console.log("Salvataggio di un libro");
}

//STORE_REVIEW
const storeReview = (req, res, next) => {
  const filmId = req.params.id;
  const { name, vote, text } = req.body;
  console.log(name, vote, text, bookId);

  // Validation
  if (isNaN(vote) || vote < 0 || vote > 5) {
    return res.status(400).json({
      status: "fail",
      message: "Il voto deve essere valore numerico compreso tra 0 e 5",
    });
  }

  if(name.length <= 3) {
    return res.status(400).json({
      status: "fail",
      message: "Il nome deve essere più lungo di 3 caratteri",
    });
  } 

  if(text && text.length > 0 && text.length < 5) {
    return res.status(400).json({
      status: "fail",
      message: "Il testo deve essere lungo almeno 6 caratteri",
    });
  }

  // Prima di fare la query di inserimento, 
  // ci assicuriamo che il libro con il dato id esiste
  const filmSql = `
    SELECT *
    FROM movies
    WHERE id = ?
  `;

  connection.query(filmSql, [filmId], (err, results) => {
    if (err) {
      return next(new Error("Errore interno del server"));
    }
    if (results.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "film non trovato",
      });
    }
    // Se è andato tutto bene  possiamo aggiungere la recensione

    const sql = `
    INSERT INTO reviews(movie_id, name, vote, text)
    VALUES (?, ?, ?, ?);
    `;
    
    connection.query(sql, [movie_id, name, vote, text], (err, results) => {
      if (err) {
        return next(new Error(err.message));
      }
      res.status(201).json({
        status: "success",
        message: "Recensione aggiunta"
      });
    });
  });
};

module.exports = {
  index,
  show,
  store,
  storeReview
};