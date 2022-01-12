const mongoose = require('mongoose');
const Rating = require('../models/RatingModel');
const Place = require('../models/PlacesModel');

module.exports ={
    //GET ALL
    getAll:(req, res)=>{
        Rating.find()
        .exec()
        .then(result =>{
            res.status(200).json({
                message: "fetched successfully",
                data: result
            })
        }).catch(err =>{
            res.status(500).json({
                message: "Fetching failed",
                error: err
            })
        })
    },

    //POST
    post:async (req, res)=>{
        const rating = new Rating({
            _id: new mongoose.Types.ObjectId(),
            userID: req.body.userID,
            placeId: req.body.placeID,
            rating: req.body.rating
        });
        const exist = await Rating.exists({userID: req.body.userID, placeId: req.body.placeID});
        if(exist){
            this.update
        }
        else{
        rating.save()
        .then(result =>{
            Place.updateOne({_id: req.body.placeID}, {$push:{ratings: rating._id }}).exec();
            res.status(200).json({
                message: "posted successfully",
                posted_data: result
            })
        }).catch(err =>{
            res.status(500).json({
                message: "failed posting",
                error: result
            })
        })
        }
    },
    //DELTE
    //UPDATE
    update: (req, res)=>{
        Rating.findByIdAndUpdate({userID: req.body.userID, placeId: req.body.placeID}, {$set: req.body})
        .exec()
        .then(result =>{
            res.status(200).json({
                message: "Updated SUccessfully",
                data: result
            })
        }).catch(err =>{
            res.status(500).json({
                message: "Updating failed",
                error: err
            })
        })
    },
};