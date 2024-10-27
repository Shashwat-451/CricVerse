import React, { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import { APIs} from '../services/apis';
import axios from 'axios';
import { apiConnector } from '../services/apiConnector';
import MatchCard from '../components/MatchCard';
function LiveScores(props) {

    const [matches,setMatches]=useState([]);
    const fetchLiveMatches = async (playerId) => {
        try {
          const res = await apiConnector("POST",APIs.liveMatches)
          setMatches(res.data.data.typeMatches)
         
        } catch (error) {
          console.error(error);
        }
      };
    
     
      useEffect(() => {
        fetchLiveMatches();
      }, []);
      const allMatches=[]
      console.log("matches",matches)
      matches.forEach((match)=>{
        if(match.matchType==="International" || match.matchType==="League"){
          match.seriesMatches.forEach((seriesmatch)=>{
            if(seriesmatch.seriesAdWrapper){
             allMatches.push(...seriesmatch.seriesAdWrapper.matches)
            }
          })
        }
      })
      console.log("allMatches",allMatches)
    return (
        <div className='bg-gray-800'>
            <Navbar/>
            <div className="liveMatches bg-gray-800 mt-28">
              {
                allMatches.map((match)=>(
               
                <div className=" m-10 ">
                   <MatchCard data={match}/>
                </div>
              ))
              }
            </div>
        </div>
    );
}

export default LiveScores;