// import React from "react";

// const UserContext = React.createContext()               // Step 1 - Create the context 

// // Every context object created using the create context method comes with a provider and a consumer react component 
// const UserProvider = UserContext.Provider
// const UserConsumer = UserContext.Consumer

// export {UserProvider, UserConsumer}
// =======

// Context API
import React from "react";

const UserContext = React.createContext('codevolution')               // Step 1 - Create the context 

// Every context object created using the create context method comes with a provider and a consumer react component 
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext