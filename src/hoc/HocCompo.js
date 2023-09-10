import React, { useState } from "react";

function HocCompo(props){
    const [count,setcount]=useState(10)

    const increment=()=>{
        setcount(count*1000)
    }
    
    
return(
    <>
    
    <h1>Multipy COMPONENT</h1>
   <h1 style={{background:'black',color:'white',width:400,display:'inline-block',margin:20,borderRadius:30}}> <props.value count={count} increment={increment} heading='this is person one' /></h1>
    <h1 style={{background:'green',width:400,display:'inline-block',borderRadius:30}}><props.value count={count} increment={increment} heading='this is person one copy' /></h1>
    {/* <props.value  heading='this is person one' /> */}
  {/* <h1>  <props.value decrement={decrement} data={data} headings='this is person two'/></h1> */}
  {/* <h1>  <props.value decrement={decrement} data={data} headings='this is person two'/></h1> */}
    
    </>
)


}
export default HocCompo;
function HocCompoTwo(props){
    const [data,setdata]=useState(10000)

    
    const decrement=()=>{
       setdata(data - 1000)
  }
    
    return(
        <>
        <h1>Decrement COMPONENT</h1>
      <h1 style={{borderRadius:30,width:400,backgroundColor:'blue',display:'inline-block',margin:30}}><props.value decrement={decrement} data={data} headings='this is person two'/></h1>
      <h1 style={{borderRadius:30,width:400,backgroundColor:'red',display:'inline-block',margin:30}}><props.value decrement={decrement} data={data} headings='this is person two copy'/></h1>
      
      </>
    )
}
export {HocCompoTwo}