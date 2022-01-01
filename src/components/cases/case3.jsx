import React,{useState} from 'react'

//counter using state
const Case3 = ()=>{

  const [counter,setCounter]=useState(0);
  const increment=()=>setCounter(counter+1);

return(
  <div>
      <div id='counter'>{counter}</div>
  <button onClick={increment}>Increment</button>
  </div>
    )
}

export default Case3