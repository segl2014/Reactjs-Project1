// The Post methods in a second argument which is the data that has to be sent in our case 

import React, { Component } from 'react'
import Axios from 'axios'                         // import axios

class HttpPostForm extends Component {

    constructor(props) {
        super(props)

        // let's create state properties for these three fields 
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    // changeHandler is going to be an arrow function which going to accept the event assets argument and within the body we are going to call set state where the key is going to be e.target.name and the value is going to be e.target.value 
    changeHandler = (e) => {    // we don't have to have separate handles for each imput the 

        this.setState({[e.target.name]: e.target.value })
   
    }

    // let's define the handler so submit handler is going to be an error function and within the body for 
    submitHandler = e => {

        // we will prevent default to avoid page refresh and simply
        e.preventDefault()
        console.log(this.state)

        // submitHandler we make the post request axios.post and the first argument is the URL which as it turns out is the some as the get request
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)   // case it is the state object this.state once the request completes we either get response or get an error
        // the first argument is hte URL which as it turns out is the some as the get request

        .then (response => {
            console.log (response)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() {
        // let's be structure them in the render method and add their values to the value attribute of the input elements
        const { userId, title, body } = this.state  // the structure and assign to the value attribute
        return (
            <div>
                <div>Http Post Form</div>
                {/* the form tag we listen to the on submit event and assign a handler this.submitHandler */}
                <form onSubmit={this.submitHandler}>
                    {/* form with three input elements */}
                    <div>
                        <input
                            type="text"
                            name="userId"              // by making use of the name attribute we don't have to have separate handlers for each input
                            value={userId}
                            onChange={this.changeHandler}
                        />
                        {/* we add the on change handler to track the change in input values and keep them in sync with the state object */}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="title"             // by making use of the name attribute we don't have to have separate handlers for each input
                            value={title}
                            onChange={this.changeHandler}
                        />
                        {/* we add the on change handler to track the change in input values and keep them in sync with the state object */}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="body"             // by making use of the name attribute we don't have to have separate handlers for each input
                            value={body}
                            onChange={this.changeHandler}
                        />
                        {/* we add the on change handler to track the change in input values and keep them in sync with the state object */}
                    </div>

                    {/* we need is the submit handler so  */}
                    <button type="submit"> Submit</button>

                </form>
            </div>

        )
    }
}

export default HttpPostForm