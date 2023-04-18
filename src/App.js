import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Moustapha",
      bio: "développeur web",
      profession: "informaticien",
      shows: true,
    };
  }

  toggle() {
    this.setState({ shows: !this.state.shows });
    console.log(this.state.shows);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.toggle()}>Toggle</button>
        {this.state.shows && <img src="/logo192.png" alt="" />}
        <Clock />
      </div>
    );
  }
}

export default App;
