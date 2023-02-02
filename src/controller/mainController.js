const mainController = {
    home : (req, res) => {
        res.render('index',{
            css: './css/styles.css',
        })
    },
};

module.exports = mainController