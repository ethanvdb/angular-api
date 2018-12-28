var mongoose = require('mongoose');

var statSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
   aantalWedstrijden: Number,
   gemaakteDoelpunten: Number,
   assists: Number,
   schotenOpDoel: Number,
   schoten: Number
})

module.exports = mongoose.model('Stat', statSchema);