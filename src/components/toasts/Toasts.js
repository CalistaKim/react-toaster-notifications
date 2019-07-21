import React from "react";
import { connect } from "react-redux";
import Toast from "./toast/Toast";
import { removeToast } from "../../actions";
import "./toasts.css";

function Toasts(props) {
  const { removeToast, toasts } = props;
  return (
    <ul className="toasts">
      {toasts.map(toast => {
        const { id } = toast;
        return (
          <Toast {...toast} key={id} onDismissClick={() => removeToast(id)} />
        );
      })}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    toasts: state.toasts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeToast: data => dispatch(removeToast(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toasts);
