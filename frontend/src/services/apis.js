import PlayerStats from "../pages/PlayerStats"

const BASE_URL = "http://localhost:5000/api/v1"

export const APIs={
  rankings:BASE_URL+"/getRankings",
  teams:BASE_URL+"/getTeams",
  playerStats:BASE_URL+"/getPlayerStats",
  schedule:BASE_URL+"/getSchedule",
  news:BASE_URL+"/getNewsList",
  images:BASE_URL+"/getImageById",
   liveMatches:BASE_URL+"/getLiveMatchList",
   liveScorecard:BASE_URL+"/getLiveScoreCard"
}