const Rooftop = require('../../models/rooftops')

module.exports = {
    create,
    index
}

async function create(req, res) {
    const rooftop = new Rooftop({
        text: req.body.text,
        user: req.body.user,
    });
    try {
        const savedRooftop = await rooftop.save();
        res.json(savedRooftop);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    const userId = req.user._id;
    const rooftops = await Rooftop.find({ user: userId });
    res.json(rooftops);
}