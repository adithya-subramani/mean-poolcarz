const mongoose = require('mongoose');
const schema = require('./schema');

const mride=mongoose.model("myrides",schema[0]);
const muser=mongoose.model("myusers",schema[1]);
module.exports=[mride,muser];