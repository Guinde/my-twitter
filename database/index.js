const mongoose = require('mongoose');
const env = require(`../environment/${ process.env.NODE_ENV }.js`);

//Set up mongoose connection
const mongoDB = env.dbURl;
try {
    mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("Connect to the database");

} catch(e) {
    console.log("Connection fail ! => " + e);
}

// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => {
//     console.log("Connect to the database");
// }).catch((err) => {
//     console.log("Connection fail ! => " + err);
// });