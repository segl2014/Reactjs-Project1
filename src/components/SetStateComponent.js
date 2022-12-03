import React, { Component } from 'react'

class SetStateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increament(){

        // this.state.count = this.state.count + 1
        //   console.log(this.state.count)
        //   Always make use of setState and never modify the state directly 

        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {                                               
        //         console.log('callback value', this.state.count)
        //     }
        // )
    
        // The setState has two parameters 1. state object 2. callback function will be arrow function

    this.setState((prevState,props) => ({
        count: prevState.count + 1
    }))
console.log(this.state.count)
}

increamentFive(){
    this.increament()
    this.increament()
    this.increament()
    this.increament()
    this.increament()
}
    render() {
        return (
            <div>
                <div>SetStateComponent</div>
                
                <div> count - {this.state.count}</div>
                {/* <button onClick={() => this.increament()}>Increament</button> */}
                <button onClick={() => this.increamentFive()}>Increament</button>
            </div>
        )
    }
}


export default SetStateComponent