import React, { Component } from "react";
import RegularCompo from "./RegularComponent";
import PureCompo from "./PureComponet";



class ParentCompo extends Component{
    constructor(){
        super();
        this.state={
            name:"Prepbytes"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Prepbytes"
            })
         
        }, 2000);
    }



    render(){
           console.log('***************Parent Component**************')

       return(
<>

<h1>Hello I AM Parent Component </h1>
<RegularCompo  name={this.state.name}/>
<PureCompo   name={this.state.name}/>

</>

       )
    }

}
export default ParentCompo;