import { useState } from "react";

function LearningUseState(){
    // const [name,setName] = useState("Manish")  // ["Manish",f]
    // const [age,setAge] =  useState(22) // [22,f]
    // const [address,setAddress] =  useState('Itahari') // ["Itahari",f]
    const [counter,setCounter] =  useState(0) // [0,f]
    // const returnedData = returnData[0] // manish 
    // const returnedFunction = returnData[1] // function 

    // console.log(returnedData,returnedFunction)
    // let counter = 0 
    function increaseCounter(){
        setCounter(counter+1)
        // counter++
    }

    function decreaseCounter(){
      setCounter(counter -1)
        // counter--;
    }

    return(
      <>
        <h1>{counter}</h1>
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button>
        
      </>
    )
}

export default LearningUseState