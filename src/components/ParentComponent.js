import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    // greetParent() {
    //     alert(`Hello ${this.state.parentName}`)
    // }

        greetParent(ChildName) {
            alert(`Hello ${this.state.parentName} from ${ChildName}`)
        }

    render() {
        return (
            <div>
                <div>Parent Component</div>
                <div> <ChildComponent greetHandler={this.greetParent} /> </div>
            </div>
        )
    }
}

export default ParentComponent