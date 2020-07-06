import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

        render() {
        //   return this.state.isLoggedIn && <div>Welcome Sravan</div>  uding Short Circuit Operator

    return this.state.isLoggedIn ? 
      <div>Welcome Sravan</div> :
      <div>Welcome Guest</div>
    

                
                
    //     let message;
    //     if (this.state.isLoggedIn) {
    //       message = <div>Welcome Sravan</div>;   using Elements Variables method
    //     } else {
    //       message = <div>Welcome Gues</div>;
    //     }
    //     return <div>{message}</div>;

    //          render() {
    //     if (this.state.isLoggedIn) {
    //       return <div>Welcome Sravan</div>;   using if else in render method with return inside of if/else
    //     } else {
    //       return <div>Welcome Guest</div>;
    //     }

    //     return (
    //       <div>
    //         <div>Welcome Sravan</div>
    //         <div>Welcome Kittu</div>
    //       </div>
    //     );
  }
}

export default UserGreeting;
