import { redisClient } from "../index.js";
import redisKeys from "../utils/redisKeys.js";
import { rankingAPIs } from "../utils/apis.js";
import { apiConnector } from "./apiServices.js";

class RankingsService {
  async getRankings(format, playerType) {
    try {
      // Use a clearer key format for Redis
      const key = `${redisKeys.RANKING_KEY}:${format}:${playerType}`;
      
      // Attempt to fetch from cache
      const cachedData = await redisClient.get(key);
      if (cachedData) {
        const data = JSON.parse(cachedData);
        // console.log("Returning cached data:", data);
        return data;
      }

      // Construct the API endpoint dynamically
      const API = `${rankingAPIs.getRankings}${playerType}?formatType=${format}`;

      // Fetch data from external API
      const response = await apiConnector("GET", API);

      // Use response.data if available, otherwise use the entire response
      const data = response.data ? response.data : response;

      // Cache the fetched data for future use
      await redisClient.set(key, JSON.stringify(data),'EX',86400);

      return data;
    } catch (error) {
      console.log("Error fetching rankings data:", error);
      throw error; // Re-throw to propagate the error to the caller
    }
  }
}

export default new RankingsService();