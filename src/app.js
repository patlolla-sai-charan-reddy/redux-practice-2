import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class Foo extends Component {
  render() {
    this.props.hell3();
    return <p>Hello</p>;
  }
}

const hell = () => ({ type: "IN HELL" });
const hell2 = () => ({ type: "IN HELL 2" });
const hell3 = () => ({ type: "IN CHILD 3" });

const mapDispatchToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators({ hell, hell2, hell3 }, dispatch);
};

const Apple = connect(
  null,
  mapDispatchToProps
)(Foo);

export default Apple;
