const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/auth');
const passport = require('../middlewares/passport');

const TaskStatusController = require('../Controllers/TaskStatusController');
const UsersController = require('../Controllers/UsersController');
const TaskCategoriesController = require('../Controllers/TaskCategoriesController');
const TasksController = require('../Controllers/TasksController');
const AuthController = require('../Controllers/AuthController');

// ---------- TaskStatusController ----------

router.get('/TaskStatus', TaskStatusController.retrieveTaskStatus);
router.post('/TaskStatus', auth, TaskStatusController.createTaskStatus);

router.get('/TaskStatus/:StatusID', TaskStatusController.retrieveTaskStatuses);
router.put('/TaskStatus/:StatusID', auth, TaskStatusController.updateTaskStatus);
router.delete('/TaskStatus/:StatusID', auth, TaskStatusController.deleteTaskStatus);

// ---------- TaskCategoriesController ----------

router.get('/TaskCategories', TaskCategoriesController.retrieveTaskCategories);
router.post('/TaskCategories', auth, TaskCategoriesController.createTaskCategories);

router.get('/TaskCategories/:CategoryID', TaskCategoriesController.retrieveTaskCategory);
router.put('/TaskCategories/:CategoryID', auth, TaskCategoriesController.updateTaskCategories);
router.delete('/TaskCategories/:CategoryID', auth, TaskCategoriesController.deleteTaskCategories);

// ---------- TaskController ----------

router.get('/Tasks', TasksController.retrieveTasks);
router.post('/Tasks', auth, TasksController.createTasks);

router.get('/Tasks/:TaskID', TasksController.retrieveTask);
router.put('/Tasks/:TaskID', auth, TasksController.updateTasks);
router.delete('/Tasks/:TaskID', auth, TasksController.deleteTasks);

// ---------- UsersController ----------

router.get('/Users', UsersController.retrieveUsers);
router.post('/Users', auth, UsersController.createUsers);

router.get('/Users/:UserID', UsersController.retrieveUser);
router.put('/Users/:UserID', auth, UsersController.updateUsers);
router.delete('/Users/:UserID', auth, UsersController.deleteUsers);

// ---------- AuthController ----------

router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);

module.exports = router;