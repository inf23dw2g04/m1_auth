var sql = require("../utils/db");

const retrieveTaskCategories = (req, res) => {
  sql.query("SELECT * FROM TaskCategories", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createTaskCategories = (req, res) => {
  sql.query(
    "INSERT INTO TaskCategories (CategoryID, CategoryName) Values (?,?)",
    [
      req.body.CategoryID,
      req.body.CategoryName
    ], 
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveTaskCategory = (req, res) => {
    sql.query(
    "SELECT * FROM TaskCategories WHERE CategoryID = ?",
    [req.params.CategoryID], 
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteTaskCategories = (req, res) => {
    sql.query(
    "DELETE FROM TaskCategories WHERE CategoryID = ?", 
    [req.params.CategoryID], 
    function (err, result) {
      if (err) throw err;
      res.send("User " + req.params.CategoryID + " successfully deleted, You coward");
    }
  );
};

const updateTaskCategories = (req, res) => {
  sql.query(
    "UPDATE TaskCategories SET CategoryName = ? WHERE CategoryID = ?",
    [req.body.CategoryName, req.params.CategoryID],function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {retrieveTaskCategories, retrieveTaskCategory, deleteTaskCategories, updateTaskCategories, createTaskCategories};