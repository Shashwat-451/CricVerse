import NewsServices from "../services/NewsServices.js";

class NewsController{
   
  async getNewsList(req,res){
    try{
       const {format,playerType}=req.body;
       const response=await NewsServices.getNewsList();
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

  async getNewsDetail(req,res){
    try{
       const {newsId}=req.body;
       const response=await NewsServices.getNewsDetail(newsId);
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

export default new NewsController();