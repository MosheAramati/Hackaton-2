const db = require('../config/db.js');

const base64ToBinary = (base64String) => {
    return Buffer.from(base64String, 'base64');
};

const __addPhoto = async (heroID, base64photo) => {
    const photoBinary = base64ToBinary(base64photo);
    await db('photos').insert({
        hero_id: heroID,
        photo: photoBinary
    });
};

const __getPhotosByHeroID = async (heroID) => {
    return await db('photos').where('hero_id', heroID).select('photo');
};

const __updatePhoto = async (photoID, base64Photo) => {
    const photoBinary = base64ToBinary(base64Photo);
    await db('photos').where('id', photoID).update({
        photo: photoBinary
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