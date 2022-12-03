import React, { Component } from 'react'

class MountingLifecysleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'vishwas'
        }
        console.log('Mounting LifecycleB Constructor ')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Mounting LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Mounting LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Mounting LifecycleB shouldComponentUpdate ')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Mounting LifecycleB getSnapshotBeforeupdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA LifecycleDidUpdate')
    }

    render() {
        console.log('Mounting LifecycleB render ')
        return (
            <div>
               <div>Mounting Lifecysle B</div>
               <button onClick={this.changeState}> Change state</button>
            </div>
        )
    }
}

export default MountingLifecysleB