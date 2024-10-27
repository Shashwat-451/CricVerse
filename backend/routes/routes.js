import AuthController from "../controllers/AuthController.js"
import ImageController from "../controllers/ImageController.js"
import LiveController from "../controllers/LiveController.js"
import NewsController from "../controllers/NewsController.js"
import PlayerController from "../controllers/PlayerController.js"
import RankingController from "../controllers/RankingController.js"
import ScheduleController from "../controllers/ScheduleController.js"
import TeamsController from "../controllers/TeamsController.js"
import {Router} from "express";

class UserRouter{

    constructor(){
      this.router=Router();
      this.initializeRoutes();
    }

    initializeRoutes(){
        // this.router.post("/signup",AuthController.signup);
        // this.router.post("/login",AuthController.login);
        this.router.get("/getNewsList",NewsController.getNewsList)
        this.router.post("/getNewsDetail",NewsController.getNewsDetail)
        this.router.post("/getPlayerStats",PlayerController.getPlayerStats);
        this.router.post("/getRankings",RankingController.getRankings);
        this.router.post("/getSchedule",ScheduleController.getSchedule);
        this.router.post("/getTeams",TeamsController.getTeams);
        this.router.post("/getImageById",ImageController.getImageById);
        this.router.post("/getLiveMatchList",LiveController.getLiveMatchList);
        this.router.post("/getLiveScoreCard",LiveController.getLiveScoreCard);
    }
}


export default new UserRouter().router;
