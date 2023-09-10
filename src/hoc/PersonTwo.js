import React from "react";


function PersonTwo(props){


    return(
        <>
        <h1>{props.headings}</h1>
        <h1>Decrement {props.data}</h1>
        <button onClick={props.decrement}> decrement the amount</button>
        </>
    )
}
export default  PersonTwo;