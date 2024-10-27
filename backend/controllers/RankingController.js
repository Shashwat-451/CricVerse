import RankingServices from "../services/RankingServices.js";


class RankingController{
    
  async getRankings(req,res){
    try{
       const {format,playerType}=req.body;
       const response=await RankingServices.getRankings(format,playerType);
       res.status(200).json({
        success:true,
        message:"Data Fetched",
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

export default new RankingController();