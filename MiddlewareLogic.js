module.exports = reqFilter = (req,res,next) => {
    if(!req.query.age){
        res.send('Please Provide the Age');
    }else if(req.query.age<18){
        res.send("This page is not available for this age person");
    }else{
        next();
    }
}