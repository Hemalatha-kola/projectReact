const uploadFile = require('../../config/upload-file');
const Restaurant = require('../../models/restaurant');

module.exports={
    createRestaurant,
    index,
    detail,
    deleteOne,
    updateOne
};
async function createRestaurant(req,res){
    try{
        if(req.file){
        console.log(req.file);

    }
    req.body.user = req.user._id;
    const restaurantDoc = await Restaurant.create(req.body);
    res.json(restaurantDoc);

}catch(err){
    res.status(400).json(err.message);
}
}

async function index(req, res){
    const restaurants = await Restaurant.find({}).sort('-createdAt').exec();
    res.json(restaurants);
}

async function detail(req, res){
    const restaurant = await Restaurant.findById(req.params.id);
    res.json(restaurant);
}

async function deleteOne(req, res){
    const restaurant = await Restaurant.findOneAndDelete({_id: req.params.id});
    res.json("Restaurant Deleted");

}

async function updateOne(req,res){
    const restaurant = await Restaurant.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
    res.json(restaurant);
}

