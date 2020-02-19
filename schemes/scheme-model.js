const db = require("../data/db-config.js");

module.exports = {
  add,
  find,
  findById,
  findSteps
};

function add(scheme) {
  return db("schemes").insert(scheme, "id");
}

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps as s")
    .join("schemes", "s.scheme_id", "schemes.id")
    .select("s.instructions", "schemes.scheme_name")
    .where("scheme_id", id);
}
