import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.childrem}
    </div>
  );
};
const MdaleOverly = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>;
    </div>
  );
};
const portalDom = document.getElementById("overlays");
const Modale = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalDom)}
      {ReactDOM.createPortal(
        <MdaleOverly>{props.children}</MdaleOverly>,
        portalDom
      )}
    </Fragment>
  );
};
export default Modale;
