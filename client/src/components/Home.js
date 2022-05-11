import "../styles/Home.css";
import React from "react";

function Home(){
    
return(
    <div className="home-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted ></video>
        <h1>RJ's Comedy Events</h1>
        <p>What are you waiting for?</p>
    </div>
);
}

export default Home;