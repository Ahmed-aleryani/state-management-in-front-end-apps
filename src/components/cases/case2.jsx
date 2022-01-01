import React from 'react'

//Normal variable to hold value, and then we get element and update it's content.
const Case2 = ()=>{
    let x = 0;
    const increment=()=>{
        x=x+1
        console.log(`X value is ${x}`)
        let counter = document.getElementById('counter')
        counter.innerHTML=x
    }
return(
  <div>
      <div id='counter'>{x}</div>
  <button onClick={increment}>Increment</button>
  </div>
    )
}

export default Case2