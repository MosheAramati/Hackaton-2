const db = require('../config/pg.config.js');

const __addPhoto = async (heroID, photo_url) => {
    await db('photos').insert({
        hero_id: heroID,
        photo: photo_url
    });
};

const __getPhotosByHeroID = async (heroID) => {
    return await db('photos').where('hero_id', heroID).select('photo');
};

const __updatePhoto = async (photoID, photo_url) => {
    await db('photos').where('id', photoID).update({
        photo: photo_url
    });
};

const __deletePhoto = async (photoID) => {
    await db('photos').where('id', photoID).delete();
};

module.exports = {
    __getPhotosByHeroID,
    __addPhoto,
    __updatePhoto,
    __deletePhoto
}