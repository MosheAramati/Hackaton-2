const { __addHero, __getAllHeroes, __getHeroById, __updateHero, __deleteHero } = require('../models/heroes.models');
const { __addPhoto, __getPhotosByHeroID } = require('../models/photos.models');

const addHero = async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files uploaded');
    }
    const { name, aboutMe, hebrewName } = { ...req.body };
    const newHero = await __addHero(name, aboutMe, hebrewName);
    const newPhotos = [];
    for (const file of req.files) {
        const newPhoto = await __addPhoto(newHero.id, file.locations);
        newPhotos.push(newPhoto);
    }
    res.json({ ...newHero, photos: newPhotos });
};

const getAllHeroes = async (req, res) => {
    const heroes = await __getAllHeroes();
    for (const hero of heroes) {
        hero.photos = await __getPhotosByHeroID(hero.id)
    }
    res.json(heroes)
};

const getHeroByID = (req, res) => {
    res.json(__getHeroById(Number(req.params.id)));
};

const updateHeroByID = (req, res) => {
    if (!req.photo || req.photo.length === 0) {
        return res.status(400).send('No files uploaded');
    }
    const { name, aboutMe, hebrewName } = { ...req.body };
    const updatedHero = __updateHero(Number(req.params.id), name, aboutMe, hebrewName);
    res.json(updatedHero);
};

const deleteHeroByID = (req, res) => {
    const deletedHero = __deleteHero(Number(req.params.id));
    res.json(deletedHero)
};

module.exports = { addHero, getAllHeroes, getHeroByID, updateHeroByID, deleteHeroByID };