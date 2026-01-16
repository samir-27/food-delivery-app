import foodModel from '../models/foodModel.js';
import fs from 'fs';

// add food item
const addFood = async (req, res) => {
    // let image_filename = `${req.file.filename}`;


    const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : req.file.filename,
    })
    try {
        await food.save();
        res.status(201).send({success:true,message : "Food item added successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message : "Error in adding food item", error : error.message});
    }
}

export{addFood};
