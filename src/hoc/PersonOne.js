import React, { useState } from "react";


function PersonOne(props){
    
   

    return(
        <>
        
        <h1>{props.heading}</h1>
        <h1>{props.count}</h1>
        <button onClick={props.increment}>offer</button>

        </>
    )
}
export default  PersonOne;