import React from "react";
import ParentComponent from "./components/ParentComponent";
import "./App.css";
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
//import functionClick from './components/FunctionClick'
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
import UserGreeting from "./components/UserGreeting";
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'


function App() {
  return (
    <div className="App">
      <h1 className='error'>error</h1>
      <h1 className={styles.success} >success</h1>
      {/* <Inline/> */}
      {/* <Stylesheet/> */}
      {/* <UserGreeting />
      <NameList /> */}
      {/* <ParentComponent/> */}
      {/* <FunctionClick />
      <ClassClick />
      <EventBind/> */}

      {/*      
      <Welcome name="sravan reddy"></Welcome>
      <Hello name="sravan vudem" /> 
      <Greet/>
      <Message />
      <Counter/> */}
    </div>
  );
}

export default App;
