const { string } = require('mathjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: { type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'User'},
},{
    timestamps: true
});

const restaurantSchema = new Schema({
    restaurantName: {
        type: string,
        required: true
    },
    address: String,
    description:{ type: String, required: true},
    Reviews: [reviewSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
},{
    timestamps: true
})