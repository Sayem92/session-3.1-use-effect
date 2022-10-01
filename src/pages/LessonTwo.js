import React, { useEffect, useState } from "react";

function LessonTwo() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Effect");
      setTime((current) => current + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1 className='text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 to-cyan-400'>
        {time}
      </h1>
    </div>
  );
}

export default LessonTwo;
