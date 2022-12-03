import React, { Component } from 'react'
import MountingLifecysleB from './MountingLifecycleB'

class MountingLifecysleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'vishwas'
        }
        console.log('Mounting LifecycleA Constructor ')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Mounting LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Mounting LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('Mounting LifecycleA shouldComponentUpdate ')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Mounting LifecycleA getSnapshotBeforeupdate')
        return null
    }

    componentDidUpdate(){
        console.log('Mounting LifecycleA LifecycleDidUpdate')
    }

    render() {
        console.log('Mounting LifecycleA render ')
        return (
            <div>
               <div>Mounting Lifecysle A</div>
               <MountingLifecysleB/>
            </div>
        )
    }
}

export default MountingLifecysleA