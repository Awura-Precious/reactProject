const db = require("../db/config");

const save = async (movieName, movieReview) => {
  const sql = `INSERT INTO reviews (movie_title, movie_review) 
  VALUES (?,?)`;

  const response = await db.query(sql, [movieName, movieReview]);

  return response;
};

const getAll = async () => {
  const sql = `SELECT * FROM reviews`;

  const response = await db.query(sql);

  console.log(response);

  return response;
};

const getOne = async (id) => {
  const sql = `SELECT * FROM reviews WHERE id = ? `;

  const response = await db.query(sql, id);

  return response;
};

const updateOne = async (id, movieReview) => {
  const sql = `UPDATE reviews SET movie_review =? where id = ?`;

  const response = await db.query(sql, [movieReview, id]);

  return response;
};

const deleteOne = async (id) => {
  const sql = `DELETE FROM reviews WHERE id = ?`;

  const response = await db.query(sql, id);

  return response;
};

module.exports = { save, getAll, getOne, updateOne, deleteOne };
