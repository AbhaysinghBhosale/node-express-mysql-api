const jwt = require('jsonwebtoken');

exports.signIn = (req,res)=> {
    if(req.body.username && req.body.password){
        if(req.body.username === 'abhay' && req.body.password === '12345'){
            const user = {
                user_id: 1,
                username: req.body.username,
                email: "john.doe@test.com"
            }
            jwt.sign({user},process.env.JWT_SECRET, { expiresIn: 60 * 60}, (err, token) => {
                res.status(200).json({token});
            })
        } else {
            res.status(401).json({error:'Invalid Credentials Entered'});
        }
    } else {
        res.status(401).json({error:'Username or Password is missing'});
    }
}
