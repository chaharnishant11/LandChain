var mongoose = require('mongoose');

var Blockchain =  new mongoose.Schema({
  timestamp: String,
  lastHash: String,
  hash: String,
  nonce:String,
  difficulty: Number,
  data:{
      id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      landId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Land"
      }
  }
});

module.exports = mongoose.model("Blockchain",Blockchain);
