
// @desc get goals
// @route GET /api/goals
// @access Private
const getGoal = (req, res) => {
    res.status(200).json({message:"Get Goal"})
}

// @desc set goals
// @route SET /api/goals
// @access Private
const setGoal = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:"Set Goal"})
}


// @desc update goals
// @route UPDATE /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message:`Update Goal ${req.params.id}`})
}
// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
}
module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}