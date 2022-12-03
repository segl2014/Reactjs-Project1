import React, { Component } from 'react'
import axios from 'axios'                   // Import axios

class HttpPostList extends Component {

    constructor(props) {
        super(props)

        this.state = {      // we need to create state property which will store the list of post    
            posts: [],
            errorMsg: ''    // Another state property called error message initialized to an empty string in the cache block
        }
    }

    // Axios to make a get request to the JSON placeholder API 
    componentDidMount() {
        //this method will be executed when the component mounts for the first time and this only executed once during components lifetime a perfect place for our Get request 

        axios.get('https://jsonplaceholder.typicode.com/posts')       // Valid URL
        //axios.get('https://jsonplaceholder.typicode.com/posts1')   // the URL to an invalid URL 
            // Make a Get request we invoke the get method on the Axios library and this method accepts the API endpoint as its argument

            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })   // Assign this data array to state probability then render it in the JSX
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data '})
                // set it to the string error retrieving data this.setState error retrieving data in the JSX. 
            })
        // Axios is a promiss based library so we can add them and catch blocks then accepts an arrow function as its argument which gives us access to the response 
        // Arrow function which receives the error and log error
    }

    render() {
        const { posts, errorMsg } = this.state  //So structure and conditionally render
        // In render method first the structure the state property display this list of posts using the map method
        return (
            <div>
                <div>List of Post </div>
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) : null
                        // Post is an empty array we are not going to render anything 
                }

                {errorMsg ? <div> {errorMsg}</div>: null}
            </div>
        )
    }
}

export default HttpPostList