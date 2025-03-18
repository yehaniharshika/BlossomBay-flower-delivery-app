import flowerModel from "../models/flowerModel.js";
import fs from 'fs'

//Add flower item
const addFlower = async(req,res) => {
    let image_filename = `${req.file.filename}`;

    const flower = new flowerModel({
        name:req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try{
        await flower.save();
        res.json({ success: true, message: "Flower Added" });
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
    
}

export {addFlower}