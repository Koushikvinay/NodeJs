const express = require('express');
const router = express.Router()

const {getAllTask,getTask,createTask,updateTask,deleteTask, getAlltodos, createtodos, gettodos, updatetodos, deletetodos} = require('../controllers/todos')

router.route('/').get(getAlltodos)
router.route('/').post(createtodos)
router.route('/:id').get(gettodos)
router.route('/:id').patch(updatetodos)
router.route('/:id').delete(deletetodos)


module.exports = router