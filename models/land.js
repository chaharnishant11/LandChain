var mongoose = require("mongoose");

var passportLocalMongoose = require("passport-local-mongoose");

var land = new mongoose.Schema({
    longitude: [Number],
    latitude: [Number],
    floor: Number,
    ownerId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
});

module.exports = mongoose.model("Land",land);
