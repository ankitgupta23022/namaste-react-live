import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    //console.log("Child - Constructor" + this.props.name);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP ");
    }, 1000);

    //console.log("Child - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    //console.log("ComponentWillUnmount");
  }

  render() {
    const { count } = this.state;
    //console.log("Child - render" + this.props.name);
    return (
      <div>
        <h1> Profile Class Component </h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

/**
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *  Update the DOM and refs
 *  Child componentDidUpdate
 *  
 *
 *
 */

//Extraaa Notes

/**
 * ------>Render Phase
 * 
 * Parent constructor
 * Parent render
 *
 *  child constructor First Child
 *  child render First Child
 * 
 * ------>Commit Phase
 * 
 *  Parent componentDidMount
 * 
 *  After Parent componentDidMount API call from child is done and state is set. --Since it'll take more time & data to load.
 *
 *  child componentDidMount First Child -- since it has asyc keyword and it's an async function, hence the delay.
 * 
 *  After we get the data from API call, we set the state in child component and hence:-
 * 
 *  child render First Child
 * 
 * This re-render cycle is called as "Update Cycle"
 * 
 * 
 */

export default Profile;
