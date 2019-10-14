exports.createPostValidator = (req,res,next)=>{
    //validate title
    req.check('title','Please enter post title').notEmpty();
    req.check('title','Post title must be min 10 and max 150 characters').isLength({min:10,max:150});

    //validate body
    req.check('body','Please enter post body').notEmpty();
    req.check('body','Post body must be min 4 and max 2000 characters').isLength({min:4,max:2000});

    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error:firstError});
    }
    //proceed to next middleware
    next();
}