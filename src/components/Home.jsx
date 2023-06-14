import axios from "axios";
import React, { useState, useEffect } from "react";
import getConfig from "../utils/getConfig";

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [cats,setCats] = useState([])

  useEffect(() => {

    axios.get('https://api.thecatapi.com/v1/breeds?limit=5&page=0',getConfig())
    .then(res=>{
        setCats(res.data)
        console.log(cats[0]?.image);
        console.log(cats);
    })

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="home-container">
      <div className="clock-container">
        <p>{time.toLocaleTimeString()}</p>
      </div>
      <div className="images-container">
        {
            cats.map(cat=>(
                <img src={cat.image?.url} alt="" key={cat.id}/>
            ))
        }
      </div>
    </div>
  );
};

export default Home;
