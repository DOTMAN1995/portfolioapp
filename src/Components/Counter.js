import React, {useState} from "react";

function Counter (){
    const {count, setCount} = useState(0);

    const increament = () => {
        setCount(count + 1);
    }

    const decreament = () => { 
        setCount(count - 1);
    }

    const Reset = () => {
        setCount(0);
    }
    
    return(
    <div className="container">
        <button className="btn btn-primary" onClick={increament}> + </button>
        <button className="btn btn danger" onClick={decreament}> -  </button>
        <button className="btn btn warning" onClick={Reset}> Reset </button>
        </div>
    );
}