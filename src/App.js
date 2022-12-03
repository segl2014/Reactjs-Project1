// import SetStateComponent from "./components/SetStateComponent";
// import PropsDestructuring from "./components/PropsDestructuring";
// import FunctionBodyDestructuring from "./components/FunctionBodyDestructuring";
// import ClassComponentDistructuring from "./components/ClassComponentDistructuring";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import ConditionRendering from "./components/ConditionRendering";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import FormHandling from "./components/FormHandling";
// import MountingLifecycleA from "./components/MountingLifecycleA";
// import FragmentA from "./components/FragmentA";
// import FragmentB from "./components/FragmentB";
// import ParentComp from "./components/ParentComp";
// import RefsComponent from "./components/RefsComponent";
// import RefsFocusInput from "./components/RefsFocusInput";
// import RefsFRParentInput from "./components/RefsFRParentInput";
// import PortalsComponent from "./components/PortalsComponent";
// import ErrorBoundary from "./components/ErrorBoundary";
// import ErrorBoundaryDidCatch from "./components/ErrorBoundaryDidCatch";
// import HigherOrderClickCounter from "./components/HigherOrderClickCounter";
// import HigherOrderHoverCounter from "./components/HigherOrderHoverCounter";
// import RenderClickCounter from "./components/RenderClickCounter";
// import RenderHoverCounter from "./components/RenderHoverCounter";
// import RenderUser from "./components/RenderUser";
// import RenderClickCounter from "./components/RenderClickCounter";
// import RenderCounter from "./components/RenderCounter";
// import RenderHoverCounter from "./components/RenderHoverCounter";
// import ContextComponentC from "./components/ContextComponentC";
// import { UserProvider } from "./components/ContextUser";
// import HttpPostList from "./components/HttpPostList";
// import HttpPostForm from "./components/HttpPostForm";
// import HookUsestateClassCounter from "./components/HookUsestateClassCounter";
// import HookUsestateFunctionCounter from "./components/HookUsestateFunctionCounter";
// import HookUsestateWithPreviousstate from "./components/HookUsestateWithPreviousstate";
// import HookUsestateWithObject from "./components/HookUsestateWithObject";
// import HookUsestateWithArray from "./components/HookUsestateWithArray";
// import HookUseEffectFunctionalCounter from "./components/HookUseEffectFunctionalCounter";
// import HookUseEffectClassConditionally from "./components/HookUseEffectClassConditionally";
// import HookUseEffectFunctionConditionally from "./components/HookUseEffectFunctionConditionally";
// import HookMouse from "./components/HookMouse";
// import HookMouseContainer from "./components/HookMouseContainer";
// import HookUsestateClassWithIncorrectDependency from "./components/HookUsestateClassWithIncorrectDependency";
// import HookUsestateFunctionWithIncorrectDependency from "./components/  HookUsestateFunctionWithIncorrectDependency";
// import FetchingDataA from "./components/FetchingDataA";
// import ContextComponentG from "./components/ContextComponentG";
//import React from "react";
// import UseReducerCounterOne from "./components/UseReducerCounterOne";
// import UseReducerCounterTwo from "./components/UseReducerCounterTwo";
// import UseReducerCounterThree from "./components/UseReducerCounterThree";

import React from "react";
import UseContextComponentA from "./components/UseContextComponentA";
import UseContextComponentB from "./components/UseContextComponentB";
import UseContextComponentC from "./components/UseContextComponentC";
import { useReducer } from "react";

//1.1.Create the context
//export const UserContext = React.createContext()

//2.1 Create another context cannelContext 
//export const ChannelContext = React.createContext()

//UserContext 
//2.1 Creating a context using the create context API 
export const CountContext = React.createContext()

// UserContext - 1.1. create a counter in aap.js using the reducer hook 
const initialState = 0

// the reducer function accepts two values and return one value the two values accepted are the current 
const reducer = (state, action) => {    //6. the two values accepted are the current state and the action 
  //return newState         // return newState

  //7. the reducer function body we are going to add a switch statement the switch expression is the action itself
  switch (action) {
    case 'increment':
      return state + 1

    case 'decrement':
      return state - 1

    case 'reset':
      return initialState
    default:
      return state
  }
}
//======

function App() {

  //1.2 the first one is a reducer function and the second one is the initial state 
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* <SetStateComponent/> */}
      {/* <PropsDestructuring name="Ankit" heroName="Wonder Woman"/> */}
      {/* <FunctionBodyDestructuring name="Ankit" heroName="Super Woman"/> */}
      {/* <ClassComponentDistructuring name="Ankit" heroName="Good Woman"/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <ConditionRendering/> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline/>
      <h1 className='error'> Error </h1>
      <h1 className={styles.success}> success </h1> */}
      {/* <FormHandling/> */}
      {/* <MountingLifecycleA/> */}
      {/* <FragmentA/> */}
      {/* <FragmentB/> */}
      {/* <ParentComp/> */}
      {/* <RefsComponent/> */}
      {/* <RefsFocusInput/> */}
      {/* <RefsFRParentInput/> */}
      {/* <PortalsComponent/> */}
      {/* <ErrorBoundary heroName="Ankita"/>
      <ErrorBoundary heroName="Neha"/>
      <ErrorBoundary heroName="Ankit"/> */}
      {/* <ErrorBoundaryDidCatch/> */}
      {/* <HigherOrderClickCounter/>                 // Part 1
         <HigherOrderHoverCounter/> */}
      {/* <HigherOrderClickCounter name = 'Viswas'/>  */}
      {/* <RenderClickCounter/> */}
      {/* <RenderHoverCounter/> */}
      {/* <RenderUser name="Vishwas"/> */}
      {/* <RenderUser name={ (isLoggedIn) => isLoggedIn ? ' Vishwas' : 'Guest'}/> */}
      {/* baby step */}
      {/* <RenderUser render={ (isLoggedIn) => isLoggedIn ? ' Vishwas' : 'Guest'}/> */}
      {/* <RenderCounter
        render={(count, incrementCount) => (
          <RenderClickCounter count={count} incrementCount={incrementCount} />
         )} />

      <RenderCounter
        render={(count, incrementCount) => (
          <RenderHoverCounter count={count} incrementCount={incrementCount} />
         )} />    */}

      {/* Step 3 */}
      {/* <RenderCounter>
         {(count, incrementCount) => (
          <RenderClickCounter count={count} incrementCount={incrementCount} />
         )} 
      </RenderCounter>

      <RenderCounter>
        {(count, incrementCount) => (
          <RenderHoverCounter count={count} incrementCount={incrementCount} />
         )}  
      </RenderCounter>    */}

      {/* Step 2 Provide a context value */}
      {/* <UserProvider value="Ankita">
        <ContextComponentC />
      </UserProvider > */}

      {/* <HttpPostList/> */}
      {/* <HttpPostForm/> */}

      {/* <HookUsestateClassCounter/> */}
      {/* <HookUsestateFunctionCounter/> */}
      {/* <HookUsestateWithPreviousstate/> */}
      {/* <HookUsestateWithObject/> */}
      {/* <HookUsestateWithArray/> */}
      {/* <HookUseEffectFunctionalCounter/> */}
      {/* <HookUseEffectClassConditionally/> */}
      {/* <HookUseEffectFunctionConditionally /> */}
      {/* <HookMouse/> */}
      {/* <HookMouseContainer/> */}
      {/* <HookUsestateClassWithIncorrectDependency/> */}
      {/* <HookUsestateFunctionWithIncorrectDependency/> */}

      {/* <FetchingDataA/> */}

      {/* <ContextComponentG />
      {/* 1. Create the context */}

      {/*1.2. we need to provide this context with a value and provider must wrap the children components for the value to be avaliable */}
      {/* <UserContext.Provider value={'Ankita'}>

        <ChannelContext.Provider value={'Codevolution'}>

          {/* 2.2 let's provider the context with a value of code evolution we can provide multiple context values by simply adding the provider at each level */}
      {/* <ContextComponentG />
        </ChannelContext.Provider>

      </UserContext.Provider> */}

      {/* 1.3. consume the context value  */}

      {/* 2.3  it starts getting ugly in component*/}

      {/* <UseReducerCounterOne/> */}
      {/* <UseReducerCounterTwo /> */}
      {/* < UseReducerCounterThree /> */}

      {/* UserContext - 1.1 create a counter in aap.js using the reducer hook 
                        1.2 In  the first one is a reducer     function and the second one is the initial state 
                        1.3 JS simply render the count value
                        2.1 provide and consume the contex in required component 
                        3.1 import useContext from react*/}

      {/* 2.2 <ConstContext.Provider></ConstContext.Provider> */}
      {/* 2.3 the provider we specify the value attribute */}
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        {/* 1.3 JS simply render the count value  */}
        Count - {count}
        <UseContextComponentA />
        <UseContextComponentB />
        <UseContextComponentC />
      </CountContext.Provider >
    </div>
  );
}


export default App;
