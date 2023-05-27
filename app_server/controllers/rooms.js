var fs = require('fs');
var roomsData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms page */
const rooms = (req, res) => {
    pageTitle = 'Travlr Getaways - Rooms';
    res.render('rooms', {title: pageTitle, roomsData});
};
module.exports = {
    rooms
};