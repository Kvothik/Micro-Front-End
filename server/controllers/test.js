const testDbItem = require('../models/test')

exports.getTest = async (req, res) => {
    res.status(200).json({
        message: "Test API is working!",
    });
};

exports.getMerlin = async (req, res) => {
    res.status(200).json({
        message: "Get Merlin is working!",
    });
};

exports.createTest = async (req, res) => {
    console.log('in server');
    console.log(req.body);
    const testObj = new testDbItem(req.body);
    // await testObj.save().then(() => {
    //     res.status(200).json({ testObj });
    // }).catch((err) => {
    //     res.status(400).json({ msg: err });
    // })s
};