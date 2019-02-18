const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');
const P2pServer = require('./p2p-server');
const mongoose = require('mongoose');
var passport = require('passport'),
    LocalStrategy = require('passport-local'),
    flash         = require("connect-flash"),
    methodOverride = require('method-override');
var blockchain = require('../models/blockchain');
var user = require('../models/user');
var land = require('../models/land');

const HTTP_PORT = process.env.HTTP_PORT || 3001;
mongoose.connect("mongodb://localhost/landchain",{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);


app.use(bodyParser.json());
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/',function(req,res){
  // res.render("index");
});

app.get('/blocks', (req, res) => {
  res.json(bc.chain);
});

app.post('/mine', (req, res) => {
  var userId = req.user_id;
  var landId = req.land_id;
  var data = {userId,landId};
  const block = bc.addBlock(data);

  p2pServer.syncChains();

  res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
p2pServer.listen();

console.log('listening on port number 8000');
