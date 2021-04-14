//Todo: 1) define the new controller action
//Todo: 2) export the new controller action

const Flight = require('../models/flight');
module.exports = {
    new: newFlight,
    create,
    index,
};

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.nowFlying = !!req.body.nowFlying;

    if(req.body.flightNum) {
        req.body.cast = req.body.flightNum.replace(/\s*, \s*/g, ',')
        req.body.cast = req.body.flightNum.split(',');
    }
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    Flight.create(req.body, function(err, flight) {
        if(err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
}
function index(req, res) {
    Flight.find({}, function(err,flights) {
        res.render('flights/index', { flights });
    });
}




