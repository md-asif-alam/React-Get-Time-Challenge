import React, { useState } from "react";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setcTime] = useState(newTime);
  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setcTime(newTime);
  };
  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </>
  );
};

export default App;
