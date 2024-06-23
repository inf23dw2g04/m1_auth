var sql = require("../utils/db");

const retrieveUsers = (req, res) => {
  sql.query("SELECT * FROM Users", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createUsers = (req, res) => {
  sql.query(
    "INSERT INTO Users (UserID, UserName, Email) Values (?,?,?)",
    [
      req.body.UserID,
      req.body.UserName,
      req.body.Email,
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveUser = (req, res) => {
    sql.query(
    "SELECT * FROM Users WHERE UserID = ?",
    [req.params.UserID],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteUsers = (req, res) => {
    sql.query(
    "DELETE FROM Users WHERE UserID = ?",
    [req.params.UserID],
    function (err, result) {
      if (err) throw err;
      res.send("User " + req.params.UserID + " successfully deleted, You coward");
    }
  );
};

const updateUsers = (req, res) => {
  sql.query(
    "UPDATE Users SET UserName = ?, Email = ? WHERE UserID = ?",
    [
      req.body.UserName,
      req.body.Email,
      req.params.UserID,
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {retrieveUsers, retrieveUser, deleteUsers, updateUsers, createUsers};