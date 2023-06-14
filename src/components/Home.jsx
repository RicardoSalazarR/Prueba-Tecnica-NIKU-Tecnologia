import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import axios from "axios";
import getConfig from "../utils/getConfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

const Home = () => {
  const [cats, setCats] = useState([]);
  const [time, setTime] = useState(new Date());
  const userName = useSelector(state => state.username);
  console.log(userName);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds?limit=10&page=0", getConfig())
      .then((res) => {
        setCats(res.data);
        console.log(cats[0]?.image);
        console.log(cats);
      });

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <div className="clock-container">
        <span>{`Bienvenido ${userName}`}</span>
        <span>{time.toLocaleTimeString()}</span>
      </div>

      <div className="images-main-container">
      <Slider {...settings}>
        {cats.map((cat) => (
          <div className="image-container">
            <img src={cat.image.url} alt="" className="cat-image"/>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Home;
