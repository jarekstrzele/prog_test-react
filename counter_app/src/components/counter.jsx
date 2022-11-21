import React, { Component } from 'react';

class Counter extends Component {
    
    // https:picsum.photos/200 -> random image size 200
    // special object
    state = {  
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    } ; 

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

    incrementHandler(){
        console.log("incr"); 
    }

    render() { 
        let classes = this.getBadgeClasses();
      
        return (
        <>
            <h1>My counter app</h1>
            {/*<span>{this.state.count}</span>
            <img src={this.state.imageUrl} alt=""></img>
        */}
            <span style={this.styles} className={classes}>{this.formatCount()}</span>
            <button style={{fontSize:22}} 
                className="btn btn-secondary btn-sm"
                onClick={this.incrementHandler}>
                       increment
            </button>
        </>    
        );
    }
    
    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state ;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;