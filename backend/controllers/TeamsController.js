

class TeamsController{
   
    async getTeams(req,res){
        try{
          const teamsId=req.body;
          const response=await TeamsServices.getTeams(teamsId);
          res.status(200).json({
            success:true,
            message:"Teams Data Fetched",
            data:response
          })
        }
        catch(error){
          console.log(error);
        }
    }
}

export default TeamsController;