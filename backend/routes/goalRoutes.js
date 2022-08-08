const express = require('express')
const router = express.Router()
const { getGoal } = require('../controllers/goalController')

router.get('/', getGoal) 

router.post('/',(req, res) => {
res.status(200).json({message:"Set Goals"})
  
})
router.put('/:id',(req, res) => {
    res.status(200).json({message:`Update Goals ${req.params.id}`})

})
router.delete('/:id',(req, res) => {
    res.status(200).json({message:`Delete Goals ${req.params.id}`})
})

module.exports = router