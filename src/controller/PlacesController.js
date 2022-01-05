const mongoose = require('mongoose');
const Places = require('../models/PlacesModel');


module.exports ={
    //GET ALL
    getAll:(req, res)=>{
        Places.find()
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

    //GET BY ID
    getByID: (req, res)=>{
        Places.findOne({_id: req.params.placeID})
        .exec()
        .then(result =>{
            res.status(200).json({
                message: "Fetched SUccessfully",
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
    //DELTE
    //UPDATE
};