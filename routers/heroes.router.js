const express = require('express');
const {
    addHero,
    deleteHeroByID,
    getAllHeroes,
    getHeroByID,
    updateHeroByID,
    getAllHeroesAdmin,
    confirmHero
} = require('../controllers/heroes.controllers');
const { upload } = require('../utils/upload.util');

const router = express.Router();

router.get('/', getAllHeroes);
router.get('/admin/', getAllHeroesAdmin);
router.post('/admin/:id', confirmHero);
router.get('/:id', getHeroByID);
router.post('/', upload.array('photo'), addHero);
router.put('/:id', updateHeroByID);
router.delete('/:id', deleteHeroByID);

module.exports = router;