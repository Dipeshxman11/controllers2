
const path = require('path');

   exports.contactUscontroller =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactUs.html'));
}

    exports.contactpostUscontroller = (req, res, next) => {
    res.redirect('/success');
    }