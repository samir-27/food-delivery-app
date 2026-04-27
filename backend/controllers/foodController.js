import foodModel from '../models/foodModel.js';
import fs from 'fs';

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    console.log(image_filename);
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

// all food list

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data : foods});
        
    }
    catch (error) {
        console.log(error);
        res.json({success:false, message : "Error in fetching food items", error : error.message});
    }
}

// remove food item

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlinkSync(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.jason({success:true, message : "Food item removed successfully"});
    }catch (error) {
        console.log(error);
        res.json({success:false, message : "Error in removing food item", error : error.message});
    }
}


export{addFood, listFood, removeFood};
