import React, { useState, useEffect } from 'react';
import { players } from '../services/apis';
import { Link } from 'react-router-dom';
import axios from "axios";

const ProfileCard = (props) => {
const [path,setPath]=useState("")

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const Id = `c${props.player.imageId}`;
  //       const res = await axios.get(`${players.GET_IMAGE}${Id}/i.jpg`, {
  //         headers: {
  //           "x-rapidapi-key": "9ca0dcc9b9mshe5bdedc87ae384dp1bdd7djsnbc6c1aeced4f",
  //           "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com"
  //         },
  //         responseType: "blob"
  //       });
        
  //       const imageBlob = res.data;
  //       const imageObjectURL = URL.createObjectURL(imageBlob);
  //       setImage(imageObjectURL);  // Set the image in the state
  //     } catch (error) {
  //       console.error(error);  // Handle errors
  //     }
  //   };

  //   // Fetch image only once when the component mounts
  //   fetchImage();
  // }, [props.player.imageId]);  // Dependency on imageId

  const imageId=props.player.id;
  const image=`http://i.cricketcb.com/stats/img/faceImages/${imageId}.jpg`
  const handleClick=(id)=>{
    const newPath=`/player/${id}`
    setPath(newPath)
  }
  return (
    <div style={{alignItems:"center",justifyContent:"center"}} className="w-[350px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-wrap align-middle justify-center">
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-[10px] shadow-lg mt-5" src={image} alt={props.player.name} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.player.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{props.player.role}</span>
        <div onClick={()=>{handleClick(props.player.id)}} className="flex mt-4 md:mt-6">
          <Link to={path}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Check Stats
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
