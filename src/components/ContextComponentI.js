import React from 'react'
import { UserContext, ChannelContext } from '../App'    //1.5 import UseContext, ChannelContext

function ContextComponentI() {        //1. the render props pattern to get hold of the value passed by the context
    return (
        <div>
            <div>Context ComponentI</div>
            <UserContext.Consumer>
                {
                    user => {

                        //1.6 the expected output use a context value which was the value being a passed from provider is being consumed using the render props pattern in the required component
                        return <div> User context value {user}</div>
                    }
                }
            </UserContext.Consumer>

            {/*2 consume multiple context value */}

            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>
                                                User context value {user}, channel context value {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>

        </div>

    )
}

export default ContextComponentI