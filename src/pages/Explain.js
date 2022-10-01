import React, { useEffect, useState } from "react";

function Explain() {
  const [toggle, setToggle] = useState(true);

  console.count("Render");

  useEffect(() => {
    console.count("Effect");

    return () => {
      console.log("Clean korteesi");
      // cleanup action
      console.log("Done");
    };
  }, [toggle]);

  return (
    <div>
      {toggle && <h1>Explain</h1>}
      <button
        className='px-3 py-2 bg-cyan-400 rounded-md'
        onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Explain;
