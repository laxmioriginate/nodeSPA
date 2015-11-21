'use strict';

// grab the mongoose module
var mongoose = require('mongoose');

// define our service model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('service', {
    name : {type : String, default: ''}
});
