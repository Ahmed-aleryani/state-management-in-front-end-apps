import React from 'react'

//variable displayed in div element, however, when incremented the displayed value does not change
const Case1 = ()=>{
    let x = 0;
    const increment=()=>{
        x=x+1
        console.log(`X value is ${x}`)
    }
return(
  <div>
      <div>{x}</div>
  <button onClick={increment}>Increment</button>
  </div>
    )
}

export default Case1