'use strict';
var sql = require('./dbConn.js');

//Task object constructor
var Task = function(task) {
  this.username = task.username;
  this.status = task.status;
  this.created_at = new Date();
};

Task.getAllTasks = function(result) {
  sql.query("Select * from todos;", function(err, res) {
    if (err) {
      console.log('all tasks error: ', err);
      result(null, err);
    }
    else {
      console.log('all tasks: ', res);
      result(null, res);
    }
  });
};

Task.getUserTasks = function(userId, result) {
  sql.query("Select * from todos where user_id = \""+userId+"\";", function(err, res){
    if(err){
      console.log('user tasks error: ', err);
      result(null, err);
    }
    else {
      console.log('user tasks: ', res);
      result(null, res);
    }
  })
};



// Task.createTask = function createUser(newTask, result) {
//   sql.query("INSERT INTO tasks set ?", newTask, function(err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     } else {
//       console.log(res.insertId);
//       result(null, res.insertId);
//     }
//   });
// };
//
// Task.getTaskById = function createUser(taskId, result) {
//   sql.query("Select task from tasks where id = ? ", taskId, function(err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     }
//     else {
//       result(null, res);
//     }
//   });
// };
//
// Task.updateById = function(id, task, result) {
//   sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function(err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//     }
//     else {
//       result(null, res);
//     }
//   });
// };
//
// Task.remove = function(id, result) {
//   sql.query("DELETE FROM tasks WHERE id = ?", [id], function(err, res) {
//
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//     }
//     else {
//       result(null, res);
//     }
//   });
// };

module.exports = Task;

// ---------------------- FROM CONTROLLER FOR TODOTASK: ----------------------

// // export list all tasks function
// exports.list_tasks = function(req, res){
//   // call on Task obj
//   Models.getAllTasks(
//     //pass function to getAllTask
//     function(err, task){
//       console.log("Listing Tasks. Task req: ");
//
//       // Exception handling
//       if(err){
//         res.send(err);
//         console.log('err: ', err);
//       }
//       // Send task response if success
//       console.log('Successful All Tasks', task);
//       res.send(task);
//     }
//   );
// };
//
// exports.list_user_tasks = function(req,res){
//   // pass into function the userId and the function response
//   Models.getUserTasks(req.params.userId, function(err, task){
//     console.log("Listing Tasks. Task req: ");
//
//     // Exception handling
//     if(err){
//       res.send(err);
//       console.log('err: ', err);
//     }
//     // Send task response if success
//     console.log('Successful User Tasks: \n', task);
//     res.send(task);
//   });
// };




// exports.list_all_tasks = function(req, res) {
//   Task.getAllTask(function(err, task) {
//
//     console.log('controller')
//     if (err)
//       res.send(err);
//     console.log('res', task);
//     res.send(task);
//   });
// };
//
//
//
// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//
//   //handles null error
//   if (!new_task.task || !new_task.status) {
//
//     res.status(400).send({
//       error: true,
//       message: 'Please provide task/status'
//     });
//
//   } else {
//
//     Task.createTask(new_task, function(err, task) {
//
//       if (err)
//         res.send(err);
//       res.json(task);
//     });
//   }
// };
//
//
// exports.read_a_task = function(req, res) {
//   Task.getTaskById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
//
//
// exports.update_a_task = function(req, res) {
//   Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
//
//
// exports.delete_a_task = function(req, res) {
//
//
//   Task.remove(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({
//       message: 'Task successfully deleted'
//     });
//   });
// };
