import { redisClient } from "../index.js";
import redisKeys from "../utils/redisKeys.js";
import { liveScoreAPIs, rankingAPIs } from "../utils/apis.js";
import { apiConnector } from "./apiServices.js";

class LiveServices {
  async getLiveMatchList() {
    try {
     
      const key = `${redisKeys.LIVE_SCORE}`;
      
      const cachedData = await redisClient.get(key);
      if (cachedData) {
        const data = JSON.parse(cachedData);
        // console.log("Returning cached data:", data);
        return data;
      }

      const API = `${liveScoreAPIs.getLiveMatchList}`;

      const response = await apiConnector("GET", API);

      const data = response.data ? response.data : response;

      await redisClient.set(key, JSON.stringify(data),'EX',86400);

      return data;
    } catch (error) {
      console.log("Error fetching rankings data:", error);
      throw error;
    }
  }

  async getLiveScoreCard(matchId) {
    try {
     
      const key = `${redisKeys.LIVE_SCORECARD}:${matchId}`;
      
      const cachedData = await redisClient.get(key);
      if (cachedData) {
        const data = JSON.parse(cachedData);
        // console.log("Returning cached data:", data);
        return data;
      }

      const API = `${liveScoreAPIs.getLiveScoreCard}${matchId}/scard`;

      const response = await apiConnector("GET", API);

      const data = response.data ? response.data : response;

      await redisClient.set(key, JSON.stringify(data),'EX',300);

      return data;
    } catch (error) {
      console.log("Error fetching rankings data:", error);
      throw error;
    }
  }

}

export default new LiveServices();