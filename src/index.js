import React, { Component } from "react";
import { render } from "react-dom";
import Apple from "./app";
import {
  createStore,
  bindActionCreators,
  dispatch,
  applyMiddleware,
  compose
} from "redux";
import { Provider, connect } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-blue.css";

const styles = {};

// REDUX STUFF
const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const actionTypes = {};
const actions = {};
const selectors = {};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// END OF REDUX STUFF

var columnDefs = [
  { headerName: "make", field: "make" },
  { headerName: "model", field: "model" },
  { headerName: "price", field: "price" }
];

var rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

class MyComponentRaw extends Component {
  constructor(props) {
    super(props);
    this.bindMethods();
  }

  bindMethods() {}

  render() {
    this.props.decrement();
    return (
      <div
        style={{
          height: 500,
          width: 1000
        }}
        className="ag-blue"
      >
        <Apple />
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          onDragStarted={(a, b, c) => {
            console.log("onDragStarted", a, b, c);
          }}
          onDragStopped={(a, b, c) => {
            console.log("onDragStopped", a, b, c);
          }}
          enableColResize
        />
      </div>
    );
  }
}
const decrement = () => ({ type: "DECREMENT" });
const reset = () => ({ type: "RESET" });

const mapDispatchToProps = function(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};
const MyComponent = connect(
  null,
  mapDispatchToProps
)(MyComponentRaw);

const App = () => (
  <div style={styles}>
    <Provider store={store}>
      <MyComponent />
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
