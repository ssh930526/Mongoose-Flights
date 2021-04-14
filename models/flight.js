const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const flightSchema = new Schema ({
    title: String,
    departsDate: {
    type: Date,
    default: function() {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        return date;
    }
},

    flightNum: {
        type: [String],
        min: 10,
        max: 9999
    },
    
    nowFlying: {
        type:Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model('Flight', flightSchema);