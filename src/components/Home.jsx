import React, { useState, useEffect } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
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

    </div>
  );
};

export default Home;
