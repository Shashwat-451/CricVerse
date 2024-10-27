import { apiConnector } from "./apiServices.js";
import { scheduleAPIs } from "../utils/apis.js";
import { redisClient } from "../index.js";
import redisKeys from "../utils/redisKeys.js";

class ScheduleServices {
  async getSchedules(teamId) {
    try {
      // Construct the Redis key using teamId
      const key = `${redisKeys.SCHEDULE_KEY}:${teamId}`;
      
      // Check for cached data
      const cachedData = await redisClient.get(key);
      if (cachedData) {
        const data = JSON.parse(cachedData);
        // console.log("Returning cached data:", data);
        return data;
      }

      // Build the API URL dynamically
      const API = `${scheduleAPIs.getSchedules}${teamId}/schedule`;
      
      // Fetch the data from the external API
      const response = await apiConnector("GET", API);

      // Use response.data if available, otherwise use the entire response
      const data = response.data ? response.data : response;

      // Cache the fetched data in Redis
      await redisClient.set(key, JSON.stringify(data),'EX',172800);

      return data; // Return the fetched data
    } catch (error) {
      console.log("Error fetching schedules:", error);
      throw error;
    }
  }
}

export default new ScheduleServices();