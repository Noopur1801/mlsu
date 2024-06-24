import React, { useEffect, useRef, useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';

const LearnHooks = () => {
    const btnRef = useRef();
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    },[count]);

  return(
    <div>
        <button style={{display: "none"}} ref={btnRef} onClick={() => setCount((Prev) =>Prev +1)}>Add count</button>
        <br />

        <br/>
        <button onClick={() => { btnRef.current.Click();
        btnRef.current.Click.style.display = "block"}}>Trigger count</button>
    </div>

  );
    
  
  
};
export default LearnHooks;