const { __addHero, __getAllHeroes, __getHeroById, __updateHero, __deleteHero } = require('../models/heroes.models');
const { __addPhoto, __getPhotosByHeroID } = require('../models/photos.models');

const addHero = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).send('No files uploaded');
        }
        const { name, aboutMe, hebrewName } = { ...req.body };
        const newHero = await __addHero(name, aboutMe, hebrewName);
        const newPhotos = [];
        for (const file of req.files) {
            const newPhoto = await __addPhoto(newHero.id, file.location);
            newPhotos.push(newPhoto);
        }
        res.json({ ok: true, data: { ...newHero, photos: newPhotos } });
    } catch (e) {
        res.json({ ok: false, msg: `There was error while adding new here to the database: ${e}`})
    }
};

const getAllHeroes = async (req, res) => {
    const heroes = await __getAllHeroes(true);
    for (const hero of heroes) {
        hero.photos = await __getPhotosByHeroID(hero.id);
    }
    res.json(heroes);
};

const confirmHero = async (req, res) => {
    const hero = await __getHeroById(Number(req.params.id))
    const { id } = hero;
    const updatedHero = await __updateHero(
        id, { confirmed:true }
    )
    res.json(updatedHero)
}

const getAllHeroesAdmin = async (req, res) => {
    const heroes = await __getAllHeroes();
    for (const hero of heroes) {
        hero.photos = await __getPhotosByHeroID(hero.id);
    }
    res.json(heroes);
};

const getHeroByID = (req, res) => {
    res.json(__getHeroById(Number(req.params.id)));
};

const updateHeroByID = async (req, res) => {
    const updatedHero = await __updateHero(Number(req.params.id), req.body);
    res.json(updatedHero);
};

const deleteHeroByID = async (req, res) => {
    const deletedHero = await __deleteHero(Number(req.params.id));
    res.json(deletedHero);
};

module.exports = { addHero, getAllHeroes, getHeroByID, updateHeroByID, deleteHeroByID, getAllHeroesAdmin, confirmHero };