const mongoose = require('mongoose')
const ReactFormDataSchema = new mongoose.Schema({
    _id: {type: Number},
    playerTitle: {type: String},
    playerDescription: {type: String},
    position: {type: String},
    team: {type: String},
    playerImage: {type: String},
    shoes: [
        {
            shoeTitle: {type: String},
            price: {type: Number},
            shoeImage: {type: String},
            rating: 
            { 
                rate: {type: Number}, 
                count: {type: Number} },
            count: {type: Number},
            featured: {type: Number}
          }
    ]
}, { collection: "shoestore_catalog" })

const Product = mongoose.model('Product', ReactFormDataSchema)
module.exports = Product