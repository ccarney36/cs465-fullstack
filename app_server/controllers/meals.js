var fs = require('fs');
var mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals page */
const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - Meals';
    res.render('meals', {title: pageTitle, mealsData});
};
module.exports = {
    meals
};