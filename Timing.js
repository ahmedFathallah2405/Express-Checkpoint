let time= new Date();

function Timing (req,res,next){
    let day= time.getDay();
    let hour = time.getHours();
    if (day>1  && day<7  && hour>=9  && hour<=17 ){
       
        return next()
    }
    else console.log("sorry we are closed")
}

module.exports= Timing;