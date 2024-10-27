import React from 'react';
import { APIs } from '../services/apis';
import { apiConnector } from '../services/apiConnector';
import Carousel from '../components/Carousel';
import NewsCards from "../components/NewsCards"
import { useState,useEffect } from 'react';
const News = () => {
    const [news, setNews] = useState([])

    const fetchNewsList = async () => {
        try {
            const res = await apiConnector("GET", APIs.news)
            setNews(res.data.data.storyList);
            console.log("stats-response", res)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchNewsList();
    }, []);
//    console.log("news",news)
    const carousalData=news.filter((story) => !story.ad).slice(0,5);
    const restData = news.slice(5);

    const slides = restData.filter((story) => !story.ad);
    // console.log("resData",restData)
    return (
        <>
        {console.log(carousalData)}
          <Carousel data={carousalData}/>
          <h1>Latest News</h1>

          {/* {
            slides.map((story)=>(
                <div>
                    <NewsCards data={story}/>
                </div>
            ))
          } */}
        </>
    )
};

export default News;
