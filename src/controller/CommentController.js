const mongoose = require("mongoose");
const Comment = require('../models/CommentModel');


module.exports ={
    //GET ALL
    getAll:(req, res)=>{
        Comment.find().populate("userID")
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
        Comment.findOne({_id: req.params.commentID}).populate("userID")
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
    post: (req, res)=>{
        const comment = new Comment({
            _id: new mongoose.Types.ObjectId(),
            userID: req.body.userID,
            placeId: req.body.placeID,
            comment: req.body. comment
        })
        comment.save()
        .then(result =>{
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
    },
    //DELTE
    delete: (req, res)=>{
        Comment.remove({_id: req.params.commentID})
        .exec()
        .then(result =>{
            res.status(200).json({
                message: "Deleted SUccessfully",
                data: result
            })
        }).catch(err =>{
            res.status(500).json({
                message: "Deleting failed",
                error: err
            })
        })
    },
    //UPDATE
    update: (req, res)=>{
        Comment.findByIdAndUpdate({_id: req.params.commentID}, {$set: req.body})
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