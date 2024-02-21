const db = require('../config/pg.config.js');

const __addHero = async (name, aboutMe, hebrewName) => {
    const addedHeroes = await db('heroes').insert({
        name: name,
        about_me: aboutMe,
        name_in_hebrew: hebrewName
    }).returning('*');
    return addedHeroes[0];
};

const __getAllHeroes = (confirmedOnly) => {
    if (confirmedOnly) {
        return db('heroes').select('*').where({ confirmed: true });
    } else {
        return db('heroes').select('*');
    }

};

const __getHeroById = async (heroID) => {
    const heroes = await db('heroes').select('*').where('id', heroID);
    return heroes[0]
};

const __updateHero = (heroID, name, aboutMe, hebrewName, confirmed=false) => {
    return db('heroes').where('id', heroID).update({
        name: name,
        about_me: aboutMe,
        name_in_hebrew: hebrewName,
        confirmed: confirmed
    }, ['*']);
};

const __deleteHero = async (heroID) => {
    const deletedHeroes = await db('heroes').where('id', heroID).delete(['*']);
    return deletedHeroes[0]
};

module.exports = {
    __getAllHeroes,
    __getHeroById,
    __addHero,
    __updateHero,
    __deleteHero
};