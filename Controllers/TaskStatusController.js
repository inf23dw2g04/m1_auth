var sql = require("../utils/db");

const retrieveTaskStatus = (req, res) => {
  sql.query("SELECT * FROM TaskStatus", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createTaskStatus = (req, res) => {
  sql.query(
    "INSERT INTO TaskStatus (StatusID, StatusName) Values (?,?)",
    [
      req.body.StatusID,
      req.body.StatusName
    ],
    function(err,result){
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveTaskStatuses = (req, res) => {
    sql.query(
    "SELECT * FROM TaskStatus WHERE StatusID = ?",
    [req.params.StatusID],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteTaskStatus = (req, res) => {
    sql.query(
    "DELETE FROM TaskStatus WHERE StatusID = ?",
    [req.params.StatusID],
    function (err, result) {
      if (err) throw err;
      res.send("Task " + req.params.StatusID + " successfully deleted, You coward");
    }
  );
};

const updateTaskStatus = (req, res) => {
  sql.query(
    "UPDATE TaskStatus set StatusName = ? WHERE StatusID = ?",
    [
      req.body.StatusName,
      req.params.StatusID
      ],
      function(err,result){
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {retrieveTaskStatus, retrieveTaskStatuses, deleteTaskStatus, updateTaskStatus, createTaskStatus};