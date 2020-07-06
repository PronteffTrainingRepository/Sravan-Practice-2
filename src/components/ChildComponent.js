import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;

// import React, { Component } from "react";

// class ChildComponent extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <button  onClick={(e) => props.greetHandler(this,'child')}>
//           Greet Parent
//         </button>
//       </div>
//     );
//   }
// }

// export default ChildComponent;
