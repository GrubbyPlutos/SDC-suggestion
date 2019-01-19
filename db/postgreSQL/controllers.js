const pg = require('./index.js');

module.exports.addNewRestaurant = (req, res) => {
  return pg.pool.query(`INSERT INTO restaurants values (${req.body.id},${req.body.accuracy},'${req.body.food}','${req.body.food_type}',
    ${req.body.location},'${req.body.name}','${req.body.picture}',${req.body.price},${req.body.quality},'${req.body.review_text}',
    ${req.body.reviews},${req.body.stars},${req.body.timeliness},'${req.body.username}',${req.body.wait_time})`)
    .then(res.send())
    .catch(err => res.send(`Could not add new restaurant because ${err}`));
};

module.exports.getAllSuggestions = (req, res) => {
  return pg.pool.query(`SELECT * FROM restaurants WHERE location=(SELECT location FROM restaurants WHERE id=${req.params.id}) AND food_type=(SELECT food_type FROM restaurants WHERE id=${req.params.id}) limit 12`)
    .then((suggestions) => {
      res.send(suggestions.rows);
    })
    .catch(err => res.send(`Could not get suggestions for restaurant id: ${req.params.id} (${err})`));
};

module.exports.updateRestaurant = (req, res) => {
  return pg.pool.query(`UPDATE restaurants SET ${req.body.column} = ${req.body.value} WHERE id = ${req.params.id}`)
    .then(res.send())
    .catch(err => res.send(`Could not update restaurant id: ${req.params.id} (${err})`));
};

module.exports.deleteRestaurant = (req, res) => {
  return pg.pool.query(`DELETE FROM restaurants WHERE id = ${req.params.id}`)
    .then(res.send())
    .catch(err => res.send(`Could not delete restaurant id: ${req.params.id} (${err})`));
};