import React,{useState} from 'react'

//Controlled forms through state, dict example

const Case4 = ()=>{

  const [input,setInput]=useState({
    word:'',
    definition:''
  });
  const onChange=(event)=>{
    setInput({...input,word:event.target.value})
    // setInput({...input,[event.target.name]:event.target.value})
  }
  const search=()=>{
    if(input.word!=="")
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.word}`)
    .then(res=>res.json())
    .then(data=>{
      setInput({...input,definition:data[0].meanings[0].definitions[0].definition})
    }).catch(()=>{
      window.alert("An error occurred while searching for meaning, try again!")
    })
    else
    window.alert("Enter a word to search for definition!")
    
  }

return(
  <div>
    <label>Word: </label><input name='word' value={input.word} onChange={onChange}/>
    <br/>
    <p>definition: {input.definition}</p>
    <br/>
    <button onClick={search}>Search</button>
  </div>
    )
}

export default Case4