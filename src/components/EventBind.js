import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   3. Deals with binding the event handler in the constructor as apposed to binding in the render Method
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //         this.setState({
    //         message: 'Goodbye!'
    //      })
    //     console.log(this)
    // }


    // 4. Use an arrow function as a class property
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>Binding Event Handlers</div>

                <div>{this.state.message}</div>
                
                {/* 1. Binding in the render method  */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click me </button> */}

                {/* 2. Use arrow function in the render function */}
                {/* <button onClick={() => this.clickHandler()}>Click me </button> */}

                {/* 3. Deals with binding the event handler in the constructor as apposed to binding in the render Method */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind