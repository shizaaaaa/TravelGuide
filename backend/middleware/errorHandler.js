const errors = {
    VALIDATION_ERROR:400,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    NOT_FOUND:404,
    SERVER_ERROR:500
}
const errorHandler = (err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode:500;
    switch(statusCode){
        case 400:
            res.json({
                title:"Validation Failed",               //unexpected syntax
                message:err.message,
            });
            break;
        case errors.NOT_FOUND:
            res.json({
                title:"Not found",
                message:err.message,
            });
            break;
        case errors.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message:err.message,
            });
            break;
        case errors.SERVER_ERROR:
            res.json({
                title:"Server error",
                message:err.message,
            });
            break;
        case errors.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message:err.message,
            });
            break;
        default:
            break;
    }
}

module.exports=errorHandler;