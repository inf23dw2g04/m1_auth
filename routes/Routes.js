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

router.get('/TaskStatus', TaskStatusController.retrieveTaskStatuses);
router.post('/TaskStatus', auth, TaskStatusController.createTaskStatus);

router.get('/TaskStatus/:id', TaskStatusController.retrieveTaskStatus);
router.put('/TaskStatus/:id', auth, TaskStatusController.updateTaskStatus);
router.delete('/TaskStatus/:id', auth, TaskStatusController.deleteTaskStatus);

// ---------- TaskCategoriesController ----------

router.get('/TaskCategories', TaskCategoriesController.retrieveTaskCategories);
router.post('/TaskCategories', auth, TaskCategoriesController.createTaskCategories);

router.get('/TaskCategories/:id', TaskCategoriesController.retrieveTaskCategory);
router.put('/TaskCategories/:id', auth, TaskCategoriesController.updateTaskCategories);
router.delete('/TaskCategories/:id', auth, TaskCategoriesController.deleteTaskCategories);

// ---------- TaskController ----------

router.get('/Tasks', TasksController.retrieveTasks);
router.post('/Tasks', auth, TasksController.createTasks);

router.get('/Tasks/:id', TasksController.retrieveTask);
router.put('/Tasks/:id', auth, TasksController.updateTasks);
router.delete('/Tasks/:id', auth, TasksController.deleteTasks);

// ---------- UsersController ----------

router.get('/Users', UsersController.retrieveUsers);
router.post('/Users', auth, UsersController.createUsers);

router.get('/Users/:id', UsersController.retrieveUser);
router.put('/Users/:id', auth, UsersController.updateUsers);
router.delete('/Users/:id', auth, UsersController.deleteUsers);

// ---------- AuthController ----------

router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);

module.exports = router;