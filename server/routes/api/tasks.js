const express = require('express');
const router = express.Router();
const Task = require('../../../models/Task');

/**
 * @route GET api/tasks
 * @description Get list of tasks
 * @access Public
 */
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

/**
 * @route GET api/tasks/id
 * @description Get task by id
 * @access Public
 */
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    try {
        res.status(200).json(task);
    }
    catch (err) {
        res.json({
            msg: `Error occured ${err}`
        })
    }

});

/**
 * @route POST api/tasks
 * @description Create task
 * @access Private
 */
router.post('/', (req, res) => {
    const task = new Task({
        name: req.body.name,
        done: false,
        author: req.body.author,
    });

    task.save()
        .then(data => {
            res.status(200).json({
                msg: data
            });
        })
        .catch(err => {
            res.json({
                msg: `Error occured ${err}`
            });
        })
});

/**
 * @route DELETE api/tasks/id
 * @description Delete task
 * @access Private
 */
router.delete('/:id', async (req, res) => {
    try {
        const removedTask = await Task.deleteOne({ _id: req.params.id });
        res.json(removedTask);
    }
    catch (err) {
        res.json({
            msg: `Error occured ${err}`
        })
    }
});

/**
 * @route UPDATE api/tasks/id
 * @description Update task
 * @access Private
 */
router.patch('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.updateOne({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                done: req.body.done,
                author: req.body.author,
            }
        });
        res.json(updatedTask);
    }
    catch (err) {
        res.json({
            msg: `Error occured ${err}`
        })
    }

})

module.exports = router;