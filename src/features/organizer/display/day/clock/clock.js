import React, { useState } from "react";
import { getTime } from "../../../../../helpers";

export const Clock = () => { 
  
  setInterval(() => { setTimeNow( getTime(Date.now()) ) }, 60000);
  const [timeNow, setTimeNow] = useState(getTime(Date.now()));

  return ( 
    <>
      {timeNow}
    </>
    
  )
}