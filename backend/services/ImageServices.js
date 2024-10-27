import { redisClient } from "../index.js";
import redisKeys from "../utils/redisKeys.js";
import { newsAPIs, photosAPIs, rankingAPIs } from "../utils/apis.js";
import { apiConnector } from "./apiServices.js";


class ImageServices {
  async getImageById(imageId) {
    try {
      const API = `${photosAPIs.getImageById}c${imageId}/i.jpg`;

      // Fetch data from external API
      const response = await apiConnector("GET", API);
//  console.log("response",response)
      // Use response.data if available, otherwise use the entire response
      const data = response.data ? response.data : response;
// return response;
      // Cache the fetched data for future use
    
      return data;
    } catch (error) {
      console.log("Error fetching rankings data:", error);
      throw error; // Re-throw to propagate the error to the caller
    }
  }
}

export default new ImageServices();
