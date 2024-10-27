//Using Promise.all

// import PlayerServices from "../services/PlayerServices";

// class PlayerController {
//   async getPlayerBio(req, res) {
//     try {
//       // Check if playerId is provided in the request body
//       const { playerId } = req.body;
//       if (!playerId) {
//         return res.status(400).json({
//           success: false,
//           message: "Player ID is required",
//         });
//       }

//       // Fetch bio, batting, and bowling data in parallel using Promise.all
//       const [bio, batting, bowling] = await Promise.all([
//         PlayerServices.getPlayerBio(playerId),
//         PlayerServices.getPlayerBatting(playerId),
//         PlayerServices.getPlayerBowling(playerId),
//       ]);

//       // Return the combined data
//       return res.status(200).json({
//         success: true,
//         message: "Data Fetched!",
//         data: { Bio: bio, Batting: batting, Bowling: bowling },
//       });
//     } catch (error) {
//       console.error("Error fetching player data:", error);

//       // Send error response with a meaningful message and error details
//       return res.status(500).json({
//         success: false,
//         message: "Internal server error while fetching player data",
//         error: error.message,
//       });
//     }
//   }
// }

// export default new PlayerController();


//Using Promise.allSettled

import PlayerServices from "../services/PlayerServices.js";

class PlayerController {
  async getPlayerStats(req, res) {
    try {
      // Check if playerId is provided in the request body
      const { playerId } = req.body;
      if (!playerId) {
        return res.status(400).json({
          success: false,
          message: "Player ID is required",
        });
      }

      // Fetch bio, batting, and bowling data in parallel using Promise.allSettled
      const results = await Promise.allSettled([
        PlayerServices.getPlayerBio(playerId),
        PlayerServices.getPlayerBatting(playerId),
        PlayerServices.getPlayerBowling(playerId),
      ]);

      // Extract the results from Promise.allSettled
      const bio = results[0].status === "fulfilled" ? results[0].value : "Bio data not available";
      const batting = results[1].status === "fulfilled" ? results[1].value : "Batting data not available";
      const bowling = results[2].status === "fulfilled" ? results[2].value : "Bowling data not available";

      // Return the combined data, including partial results if some failed
      return res.status(200).json({
        success: true,
        message: "Data Fetched!",
        data: { Bio: bio, Batting: batting, Bowling: bowling },
      });
    } catch (error) {
      console.error("Error fetching player data:", error);

      // Send error response with a meaningful message and error details
      return res.status(500).json({
        success: false,
        message: "Internal server error while fetching player data",
        error: error.message,
      });
    }
  }
}

export default new PlayerController();
