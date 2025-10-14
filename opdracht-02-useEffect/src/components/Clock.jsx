import React, { useEffect, useState } from "react";

function Clock() {

  const [currentTime, setCurrentTime] = useState(new Date());

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

 
  return (
    <div>
      <h2>Huidige tijd:</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
