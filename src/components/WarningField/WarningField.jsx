import React from "react";
import './WarningField.scss'
const WarningField = (props) => {
  return (
    <>
      <div className="field">
        <div className="warning-field-row">
          <div className="field-block">
            <h1>!</h1>
          </div>
          <div className="field-block">
            <p>
              {props.children}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WarningField;
