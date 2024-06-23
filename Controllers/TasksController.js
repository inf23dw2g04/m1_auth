var sql = require("../utils/db");

const retrieveTasks = (req, res) => {
  sql.query("SELECT * FROM Tasks", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createTasks = (req, res) => {
  sql.query(
    "INSERT INTO Tasks (TaskID, Title, Description, DueDate, UserID, CategoryID, StatusID) Values (?,?,?,?,?,?,?)",
    [
      req.body.TaskID,
      req.body.Title,
      req.body.Description,
      req.body.DueDate,
      req.body.UserID,
      req.body.CategoryID,
      req.body.StatusID,
    ],
    function(err,result){ 
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveTask = (req, res) => {
    sql.query(
    "SELECT * FROM Tasks WHERE TaskID = ?",
    [req.params.TaskID],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteTasks = (req, res) => {
    sql.query(
    "DELETE FROM Tasks WHERE TaskID = ?",
    [req.params.TaskID],
    function (err, result) {
      if (err) throw err;
      res.send("Task " + req.params.TaskID + " successfully deleted, You coward");
    }
  );
};

const updateTasks = (req, res) => {
  sql.query(
    "UPDATE Tasks SET Title = ?, Description = ?, DueDate = ?, UserID = ?, CategoryID = ?, StatusID = ? WHERE TaskID = ?", 
    [
      req.body.Title,
      req.body.Description,
      req.body.DueDate,
      req.body.UserID,
      req.body.CategoryID,
      req.body.StatusID,
      req.params.TaskID,
    ],
    function(err,result){
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {retrieveTasks, retrieveTask, deleteTasks, updateTasks, createTasks};