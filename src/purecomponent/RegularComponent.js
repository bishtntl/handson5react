import React, { Component } from "react";



class RegularCompo extends Component{
    
    render(){
           console.log('****Regular Component**')

       return(
              <>

               <h1>Hello I AM Regular Component always re-rendering again </h1>
               <h2 style={{color:'red'}}>this is always re-rendring if key value  will  same value= {this.props.name}</h2>

             </>

       )
    }

}
export default RegularCompo;