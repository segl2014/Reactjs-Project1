import React from "react";
// Part 1
// const UpdatedComponent = OriginalComponent => {

// Part 2
// const HigherOrderWithCounter = WrappedComponent => {

    // Part 3
    const HigherOrderWithCounter = (WrappedComponent, incrementNumber) => {

        class HigherOrderWithCounter extends React.Component {

            constructor(props) {
                super(props)

                this.state = {
                    count: 0
                }
            }

            // //   Part 1,2
            // incrementcount = () => {
            //     this.setState(prevState => {
            //         return { count: prevState.count + 1 }
            //     })
            // }

            //   Part 3
            incrementcount = () => {
                this.setState(prevState => {
                    return { count: prevState.count + incrementNumber }
                })
            }
            render() {
                // Part 3
                console.log(this.props.name)
                return (
                    // <OriginalComponent  
                    //     WrappedComponent
                    // count={this.state.count} 
                    // incrementcount={this.incrementcount}

                    // part 3
                    // <OriginalComponent  
                    <WrappedComponent
                        count={this.state.count}
                        incrementcount={this.incrementcount}
                        {... this.props}                          // Using the spread operator
                    />
                )
            }
        }
        //return NewComponent
        return HigherOrderWithCounter
    }

    // export default UpdatedComponent
export default HigherOrderWithCounter