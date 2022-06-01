const testDbModel = require('../models/test')

exports.getTest = async (req, res) => {
    res.status(200).json({
        message: "Test API is working!",
    });
};

exports.getMerlin = async (req, res) => {
    testDbModel.find().then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

exports.createTest = async (req, res) => {
    const testObj = new testDbModel(req.body);
    await testObj.save().then(() => {
        res.status(200).json({ testObj });
    }).catch((err) => {
        res.status(400).json({ msg: err });
    })
};