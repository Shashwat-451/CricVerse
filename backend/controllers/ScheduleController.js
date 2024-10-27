import ScheduleServices from "../services/ScheduleServices.js"

class ScheduleController{
   
    async getSchedule(req,res){
      try{
         const {teamId}=req.body;
         const response=await ScheduleServices.getSchedules(teamId);

         return res.status(200).json({
          success:true,
          message:"Data fetched successfully",
          data:response
         })
      }
      catch(error){
        console.log(error);
        return res.status(500).json({
          success:false,
          message:"Internal Server Error",
          error:error
        })
      }
    }
}

export default new ScheduleController();