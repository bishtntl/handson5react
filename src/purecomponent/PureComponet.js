import React, { PureComponent } from "react";
 

class PureCompo extends PureComponent{

    render(){

        console.log('*****purecomponent********')
        return(
           
            <>
            <h1>Hello I Am Pure Component I am not re-render again when the value will be same </h1>
            
            <h2 style={{color:'green'}}>pure componet check value of key and not re-render again if the value will same value= {this.props.name}</h2>
            </>

        )
        }
}
export default PureCompo;