// import React, { Component } from 'react'

// class ErrorBoundaryDidCatch extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          hasError: false
      
//     }

//getDerivedStateFromError(error){
//         return{
//             hasError: true
//         }
//     }

//     componentDidCatch(error, info){
//       console.log(error)
//       console.log(info)
//     }

//   render(){
//     if (this.state.hasError){
//     return <h4>Something went wrong</h4>
//     }
//     return this.props.children
//   }
// }

// export default ErrorBoundaryDidCatch