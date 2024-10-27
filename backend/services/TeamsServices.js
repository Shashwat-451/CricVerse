import { apiConnector } from "./apiServices.js";
import { teamsAPIs } from "../utils/apis.js";
import { redisClient } from "../index.js";
import redisKeys from "../utils/redisKeys.js";

class TeamsServices {
  async getTeams(teamId) {
    try {
      const key=`${redisKeys.TEAM_DATA_KEY}:${teamId}`
     
      const cachedTeamData = await redisClient.get(key);

      if (cachedTeamData) {
        // console.log("cachedData", JSON.parse(cachedTeamData));
        return JSON.parse(cachedTeamData);
      }

      const API=`${teamsAPIs.getAllPlayers}${teamId}/players`
      const response = await apiConnector("GET", API);
      
      const data = response.data ? response.data : response; 
      // console.log(key)
      await redisClient.set(key, JSON.stringify(data),'EX', 2592000);

      return data; 
    } catch (error) {
      console.log(error);
      throw error; 
    }
  }
}


export default new TeamsServices();