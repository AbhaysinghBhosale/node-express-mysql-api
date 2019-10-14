const Post = require('../models/post');


exports.getUsers = (req,res)=>{
    let users = [{'name':'abhay'},{'name':'sagar'}];
    
    res.status(200).json({users})
}