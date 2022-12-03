import React, { Component } from 'react'

export class HookUseEffectClassConditionally extends Component {
    //1. we have a class component with a start variable count initialized to 0 

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''    //3. Creating a state variable called name initialized to an empty string
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {  

        //4. So we are conditionally updating the title only when the appropriate variable changes that is only when the count value changes 
        if(prevState.count === this.state.count){   
        console.log('Updating Document Title')
        }
        document.title = `Clicked ${this.state.count} times`

    }
    render() {
        return (
            <div>
                <div>Hook UseEffect Class Conditionally</div>

                <input
                    type="text"
                    value={this.state.name}
                    onChange={e => {
                        this.setState({ name: e.target.value })
                    }}
                />
                {/* 2. In the render function we have a button and onClick of the button we increment the count value by 1
                 when increment the state changes which causes the component to re render and componentDidUpdate will execute setting the document title to the updated counter value pretty straightforward */}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click{this.state.count} times
                </button>
            </div>
        )
    }
}

export default HookUseEffectClassConditionally