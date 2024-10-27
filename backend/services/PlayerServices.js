import { playerAPIs } from "../utils/apis.js";
import { redisClient } from "../index.js";
import redisKeys from "../utils/redisKeys.js";
import { apiConnector } from "./apiServices.js";

class PlayerServices{

   async getPlayerBio(playerId){
    try{
     const key=`${redisKeys.PLAYER_DATA_KEY}:Bio:${playerId}`
     const cachedData=await redisClient.get(key);
     if(cachedData){
      const data=JSON.parse(cachedData);
      return data;
     }

     const API=`${playerAPIs.getPlayer}${playerId}`;
     const response=await apiConnector("GET",API);
     const data=response.data?response.data:response;
     await redisClient.set(key,JSON.stringify(data),'EX',1296000);

     return data;
    }
    catch(error){
      console.log(error)
      throw error
    }
   }

   async getPlayerBatting(playerId){
    try{
     const key=`${redisKeys.PLAYER_DATA_KEY}:Bio:${playerId}:batting`
     const cachedData=await redisClient.get(key);
     if(cachedData){
      const data=JSON.parse(cachedData);
      return data;
     }

     const API=`${playerAPIs.getPlayer}${playerId}/batting`;
     const response=await apiConnector("GET",API);
     const data=response.data?response.data:response;
     await redisClient.set(key,JSON.stringify(data),'EX',1296000);

     return data;
    }
    catch(error){
      console.log(error)
      throw error
    }
   }


   async getPlayerBowling(playerId){
    try{
     const key=`${redisKeys.PLAYER_DATA_KEY}:Bio:${playerId}:bowling`
     const cachedData=await redisClient.get(key);
     if(cachedData){
      const data=JSON.parse(cachedData);
      return data;
     }

     const API=`${playerAPIs.getPlayer}${playerId}/bowling`;
     const response=await apiConnector("GET",API);
     const data=response.data?response.data:response;
     await redisClient.set(key,JSON.stringify(data),'EX',1296000);

     return data;
    }
    catch(error){
      console.log(error)
      throw error
    }
   }
 
}

export default new PlayerServices();