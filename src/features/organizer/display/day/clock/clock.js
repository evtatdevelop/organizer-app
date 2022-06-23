import React, { useState, useEffect } from "react";
import { getTime } from "../../../../../helpers";

export const Clock = () => { 
  const [timeNow, setTimeNow] = useState(getTime(Date.now()));
  useEffect(() => { 
    let timer = setInterval(() => setTimeNow( getTime(Date.now()) ), 1000);
  
    return () => clearTimeout(timer)
  }, [timeNow]);
 
  return <>{timeNow}</>
}