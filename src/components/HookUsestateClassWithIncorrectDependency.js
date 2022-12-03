import React, { Component } from 'react'

export class HookUsestateClassWithIncorrectDependency extends Component {

    //1. the constructor we create a state variable called count initialized to zero
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    //2. create timers is componentDidMount so I have created an interval timer that runs every second and every second we execute the tick method
    //the tick method basically increments the count value by 1 
    componentDidMount() {
        this.intervel = setInterval(this.tick, 1000)
    }

    //3. so every second the counter increments in value by 1 timers also need to be cleared to avoid memory leaks which we do so component will unmount
    componentWillUnmount() {
        clearInterval(this.intervel)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    //4. the render method we display the count value this this.state.count  
    render() {
        return (
            <div>
                <div>Hook Usestate Class With Incorrect Dependency</div>
                <h3> {this.state.count} </h3>
            </div>
        )
    }
}

export default HookUsestateClassWithIncorrectDependency