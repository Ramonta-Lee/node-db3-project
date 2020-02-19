const db = require("../data/db-config.js");

module.exports = {
  add,
  addStep,
  find,
  findById,
  findSteps,
  update,
  remove
};

function add(scheme) {
  return db("schemes").insert(scheme, "id")
}

function addStep(step, id) {
  return db("steps")
    .insert(step, "id")
    .where("scheme_id", id);
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
  return (
    db("steps as s")
      .join("schemes", "s.scheme_id", "schemes.id")
      // join schemes ON s.schemes_id = schemes.id
      .select("s.id", "schemes.scheme_name", "s. step_number", "s.instructions")
      .orderBy("step_number")
      .where("scheme_id", id)
    // scheme_id = id
  );
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where("schemes.id", id)
    .del();
}
