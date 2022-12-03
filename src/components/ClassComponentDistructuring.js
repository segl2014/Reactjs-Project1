import React, { Component } from 'react'

class ClassComponentDistructuring extends Component {
    render() {
        const {name,heroName} = this.props
     // const {state1,state2} = this.props
        return (
            <div>
                <div> Destructure props or state in the render method </div>

                <h5> Hello {name} a.k.a {heroName} </h5>
            </div>
        )
    }
}

export default ClassComponentDistructuring