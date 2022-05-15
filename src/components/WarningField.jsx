import React from "react";
const WarningField = (props) => {
  return (
    <>
      <div className="field">
        <div className="warning-field-row">
          <div className="field-block">
            <h1><i class="fs-1 bi-info-circle"></i></h1>
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
