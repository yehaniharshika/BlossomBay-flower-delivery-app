import flowerModel from "../models/flowerModel";
import fs from 'fs'

//Add flower item
const affFlower = async(req,res) => {
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
        req.json({success:true,message:"Flower Added"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
    
}

export {addFlower}