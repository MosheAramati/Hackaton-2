const uploadPhoto = (req, res) => {
    if (!req.files || req.files.length === 0){
        return res.status(400).send('No files uploaded')
    }
};

module.exports = { uploadPhoto, deletePhoto };