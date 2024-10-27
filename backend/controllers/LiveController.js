import ImageServices from "../services/ImageServices.js";
import LiveServices from "../services/LiveServices.js";



class LiveController{
    
  async getLiveMatchList(req,res){
    try{
        
        const response=await LiveServices.getLiveMatchList();
        
       res.status(200).json({
         success:true,
         message:"Data Fetched!!",
         data:response
       })
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
  async getLiveScoreCard(req,res){
    try{
       const {matchId}=req.body;
       const response=await LiveServices.getLiveScoreCard(matchId);
       
      res.status(200).json({
        success:true,
        message:"Data Fetched!!",
        data:response
      })
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

export default new LiveController();