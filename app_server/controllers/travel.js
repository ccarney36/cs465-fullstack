const travel = (req, res) => {
    //pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: 'Travlr Getaways'});
};

module.exports = {
    travel
}

    