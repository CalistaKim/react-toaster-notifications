import React from "react";
import { connect } from "react-redux";
import Toasts from "./components/toasts/Toasts";
import { addToast } from "./actions";

function App(props) {
  const { addToast } = props;
  const handleClick = () => {
    addToast({ text: "Hello, World!" });
  };
  return (
    <main>
      <section>
        <h1>It's getting toasty!</h1>
        <p>Click the button below to dispatch a toast notification.</p>
        <button onClick={handleClick}>Dispatch</button>
      </section>
      <Toasts />
    </main>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToast: data => dispatch(addToast(data))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
