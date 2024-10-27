import React from 'react';
import HeroSection from "../components/HeroSection"
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import image from "../assets/images/background2.jpg"
import { Link } from 'react-router-dom';
function Home(props) {
    return (
        // <div >
        
        //     <Navbar/>
        //     <div className="background">
        //     <div className="overlay"></div>
        //     <div style={{ position: 'absolute', zIndex: 2 ,display:"flex",alignItems:"center",justifyContent:"center"}}>
        //         {/* Your content here */}
        //         <h1 style={{color:"white",fontSize:"100px"}}>CRICKIFY</h1>
        //         <p>Some more text over the background image.</p>
        //     </div>
        // </div>
        // </div>
        <>
<Navbar/>
<div className="relative bg-gradient-to-br from-indigo-800 via-indigo-900 to-blue-800 h-screen text-white overflow-hidden font-sans">
  
  {/* Animated Floating Background Orbs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-80 h-80 bg-indigo-500 opacity-30 rounded-full -top-10 -left-20 animate-pulse animate-floating delay-1000"></div>
    <div className="absolute w-96 h-96 bg-indigo-700 opacity-40 rounded-full -bottom-32 -right-24 animate-ping animate-floating delay-2000"></div>
    <div className="absolute w-64 h-64 bg-blue-600 opacity-20 rounded-full top-48 left-48 animate-pulse animate-floating delay-1500"></div>
  </div>

  {/* Main Content with Enhanced Animations and Fonts */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 animate-fadeInUp">
    <h1 className="text-9xl font-bold tracking-wide leading-tight text-white drop-shadow-lg mb-6 animate-slideInDown delay-200">
      CRICKET VERSE
    </h1>
    <p className="text-4xl font-bold text-blue-100  mb-10 leading-relaxed animate-slideInUp delay-400">
  Experience Cricket Like Never Before  
  <span className=" ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 animate-pulse">
    Chat
  </span>,&nbsp;
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 animate-pulse delay-200">
    Cheer
  </span>,&nbsp;
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 animate-pulse delay-400">
    Celebrate
  </span>
</p>

    <Link
      to="/livescores"
      className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-3 px-8 rounded-full text-xl font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-yellow-500/50 animate-bounceIn delay-600"
    >
      Explore
    </Link>
  </div>
</div>


 
    </>
    )
     {/* <Navbar/> */}
     {/* <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">CRICKIFY
				
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12"> Experience Cricket Like Never Before - Chat, Cheer, Celebrate!
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a>
			</div>
		</div>
	</div>
</section> */}


}

export default Home;