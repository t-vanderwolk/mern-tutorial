
// @desc get goals
// @route GET /api/goals
// @access Private
const getGoal = (req, res) => {
    res.status(200).json({message:"Get Goals"})
}

// @desc set goals
// @route SET /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({message:"Get Goals"})
}


// @desc update goals
// @route UPDATE /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message:`Update Goals ${req.params.id}`})
}
// @desc delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message:`Delete Goals ${req.params.id}`})
}
module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}