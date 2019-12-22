import React from 'react';

class Display extends React.Component{
    render(){
        if(this.props.definition === []){
            return <div>Searching....</div>
        }
        
        return(
            <div className= "container">
               <div><h3>{ this.props.word }</h3></div>
               <h3>{ this.props.definition.definition }</h3>
            </div>
            
        )
    }
}

export default Display;
