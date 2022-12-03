//1. Create a function component
import React, { useState, useEffect } from 'react'     //2. import useState, useEffect, axios
import axios from "axios"

function FetchingDataA() {
    //3. create a new state variable
    //const [posts, setPosts] = useState([])

    //2.5 let's change the state variable to post and setpost the initial value going to be an empty object instead of an empty array
    const [post, setPost] = useState({})

    //2.3 create a new state variable
    const [id, setId] = useState(1)

    //3.1 create a new state variable
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    //3.2
    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    //4. let's create our effect to fetch the data from the URL endpoint use effect accept an arrow function within the function we make our get requests using axios
    useEffect(() => {

        //5. axios.get accepts the URL which is from JSON placeholder and get request returns a promiss inside then block
        //axios.get('https://jsonplaceholder.typicode.com/posts')

        //2.4 change to bactics and add slash doller curly-braces ID so we append the post ID when we make this get request we get back a single post as opposed to an array of posts 
        //axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

        //3.3
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)


            //6. let's simply load the response and in the catch block let's log the error if there was any 
            .then(res => {
                console.log(res)
                //setPosts(res.data) //8. we call setPosts passing in res.data this will update the posts state variable which will then be rendered in the UI 
           
                //2.7 
                setPost(res.data) //8. we call setPosts passing in res.data this will update the posts state variable which will then be rendered in the UI 
            })

            .catch(err => {
                console.log(err)
            })

    //}, [id])  //2.8 we have specified an empty array as the dependency list our effect through now depends on ID
    
    //3.4 
    },[idFromButtonClick])

    //7. the render the list of posts in the browser
    return (
        <div>
            <div>Fetching Data A</div>
            {/* <ul>
            {
                posts.map(post => (
                <li key={post.userId}>{post.userId} {post.id} {post.title}{post.body}</li>
                              
            ))                }
            </ul> */}

                {/* //2. /* fetch an individual post by entering a post ID and making the get request on a button click */}
                
                {/* 2.1 create an input element that will accept a post ID from the user so within the same component */} 

                {/* 2.2 add an input element input type is equal to text and this is going to be a controlled component meaning */}
                {/* we need to set the value and listen to the unchanged event to assign the value back to the input element */}
                {/* 2.3 we assign ID to value and on change we going to call set ID so we listen to the event call set ID passing in event.target.value */}

                <><input type="text" value={id} onChange={e => setId(e.target.value)} />

                {/* 3. trigger the effect on a button click and a click handler within the click handler we made the get request */}
                
                {/* 3.1 set the ID from button click variable to the value present in the input field and that value is the ID variable which is updated on change so onClick 
                let's call handle click which is going to be a function handleclick */}
                <button type="button" onClick={handleClick} > Fetch Post </button> 


                {/* 2.6 instead a single post */}
                    <div>{post.title}</div>
                </>


            {/* <table>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                {

                    posts.map(post => (
                        <tr>

                            <td key={post.userId}>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>


                        </tr>))
                }
            </table> */}
        </div>
        

    )
}


export default FetchingDataA