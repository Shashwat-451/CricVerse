import AuthController from "../controllers/AuthController.js"
import NewsController from "../controllers/NewsController.js"
import PlayerDetail from "../controllers/PlayerDetail.js"
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
        this.router.post("/signup",AuthController.signup);
        this.router.post("/login",AuthController.login);
        this.router.post("/news",NewsController.news);
        this.router.post("/playerDetail",PlayerDetail.playerDetail);
        this.router.post("/rankings",RankingController.rankings);
        this.router.post("/schedule",ScheduleController.schedule);
        this.router.post("/teams",TeamsController.teams);
    }
}


export default new UserRouter().router;
