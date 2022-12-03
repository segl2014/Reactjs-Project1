import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('Clicked the Button')
    }
    render() {
        return (
            <div>
                <div>Event Handling Class Component</div>

                <button onClick={this.clickHandler}> Click me </button>
            </div>
        ) 
    }
}

export default ClassClick