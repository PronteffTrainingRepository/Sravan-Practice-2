import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this); //using bind in constryctor
  }

  clickHandler() {
    this.setState({
      message: "Bye",
    });
  }

  //   clickHandler = () => {
  //     this.setState({
  //       message: "Bye",    using arrow function in class Property
  //     });
  //   };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>clickBind</button>  //using bind in render method
        <button onClick={() => this.clickHandler()}>Click</button>        //  using arrow function in render method  */}
        <button onClick={this.clickHandler}>click</button>{" "}
        {/*  using bind in constructor */}
      </div>
    );
  }
}

export default EventBind;
