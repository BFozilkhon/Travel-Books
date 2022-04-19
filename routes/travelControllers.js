const { Router } = require("express");
const router = Router();
const {getAllTravel, getOneTravel, addTravel, updateTravel, deleteTravel} = require('../controllers/travelControllers')


router.get('/', getAllTravel)
router.get('/:id', getOneTravel)
router.post('/add', addTravel)
router.put('/:id', updateTravel)
router.delete('/:id', deleteTravel)

module.exports = router;
