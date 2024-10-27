import ImageServices from "../services/ImageServices.js";



class ImageController{
    
  async getImageById(req,res){
    try{
       const {imageId}=req.body;
       const response=await ImageServices.getImageById(imageId);
       res.set('Content-Type', 'image/jpeg');
      res.send(response);
    }
    catch(error){
      console.log(error)
      return res.status(500).json({
        success:false,
        message:"Internal Server Error",
        error:error
      })
    }
  }
}

export default new ImageController();