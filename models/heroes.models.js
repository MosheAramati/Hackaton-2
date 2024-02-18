const db = require('../config/db.js');

const __addHero = async (name, aboutMe, hebrewName) => {
    await db('heroes').insert({
        name: name,
        about_me: aboutMe,
        name_in_hebrew: hebrewName
    }, ['*']);
};

const __getAllHeroes = async () => {
    return await db('heroes').select('*');
};

const __getHeroById = async (heroID) => {
    return await db('heroes').select('*').where('id', heroID);
};

const __updateHero = async (heroID, name, aboutMe, hebrewName) => {
    await db('heroes').where('id', heroID).update({
        name: name,
        about_me: aboutMe,
        name_in_hebrew: hebrewName
    }, ['*']);
};

const __deleteHero = async (heroID) => {
    await db('heroes').where('id', heroID).delete(['*']);
};

module.exports = {
    __getAllHeroes,
    __getHeroById,
    __addHero,
    __updateHero,
    __deleteHero
}