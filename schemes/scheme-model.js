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
    .select(
      "schemes.scheme_name",
      "s. step_number",
      "s.scheme_id",
      "s.instructions"
    )
    .where("scheme_id", id);
}
