import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount(){
    document.body.style.overflow = "visible";
  }
  render() {
    return (
      <div className="popup">
        <div className="popup_wrap" >
            <button onClick={this.props.showHideForm}>hidden</button>
        </div>
      </div>
    );
  }
}

export default Form;
