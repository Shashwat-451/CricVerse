import React from 'react';
import HeroSection from "../components/HeroSection"
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
function Home(props) {
    return (
        <div>
            {/* <HeroSection/> */}
            <Navbar/>
            <Sidebar/>
        </div>
    );
}

export default Home;