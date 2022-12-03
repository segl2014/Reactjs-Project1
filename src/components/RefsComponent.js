import React, { Component } from 'react'

class RefsComponent extends Component {

    constructor(props) {
    super(props)
    //The first step is to create a ref we do that using react dot create ref method
      this.inputRef = React.createRef()             // this assign property we assign React.createRef
      this.cbRef = null  
      this.setcbRef = (element) => {
        this.cbRef = element
      }
    }
    
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
       
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <div>Refs Component</div>
        <div> 
            {/* The second step is attach this refs to our input element in the render method and to attach a ref we make use of the reserved ref attribute */}
            <input type="text" ref={this.inputRef} />
            <input type="text" ref={this.setcbRef} />
            <button onClick={this.clickHandler}> Click</button>
        </div>
      </div>
    )
  }
}

export default RefsComponent