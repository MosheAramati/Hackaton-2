const db = require('../config/pg.config.js');

const __addPhoto = async (heroID, photo_url) => {
    const addedPhotos = await db('photos').insert({
        hero_id: heroID,
        photo: photo_url
    }).returning('*');
    return addedPhotos[0]
};

const __getPhotosByHeroID = async (heroID) => {
    return db('photos').where('hero_id', heroID).select('*');
};

const __updatePhoto = async (photoID, photo_url) => {
    return db('photos').where('id', photoID).update({
        photo: photo_url
    });
};

const __deletePhoto = async (photoID) => {
    return db('photos').where('id', photoID).delete();
};

module.exports = {
    __getPhotosByHeroID,
    __addPhoto,
    __updatePhoto,
    __deletePhoto
}