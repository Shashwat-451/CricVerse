import TeamsServices from "../services/TeamsServices.js";

class TeamsController{
   
    async getTeams(req,res){
        try{
          const {teamId}=req.body;
          const response=await TeamsServices.getTeams(teamId);
          res.status(200).json({
            success:true,
            message:"Teams Data Fetched",
            data:response
          })
        }
        catch(error){
          console.log(error);
          res.status(500).json({
            success: false,
            message: "An error occurred while fetching teams data",
            error: error.message,
          });
        }
    }
}

export default new TeamsController();