const home= async (req,res)=>{
    try {
    res
   .status(200)
    .send("welcome in home page......");
         
    } catch (error) {
        console.log(error)
    }
}
const register = async (req,res)=>{
    try {
       res
       .status(200)
       .send("welcome in register page.......");
        
    } catch (error) {
        res.status(400).send({msg:"page not found......"})
    }
}
module.exports={home,register}
// ashish