const router = require('express').Router()
const championsCtrl = require('../controllers/champions.js')

router.post('/', championsCtrl.create)
router.post('/:id/items', championsCtrl.addItem)
router.get('/', championsCtrl.index)
router.put('/:id', championsCtrl.update)
router.delete('/:id', championsCtrl.delete)

module.exports = router