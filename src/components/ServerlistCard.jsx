import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ServerListCard = () => {
  const [showErrorState, setShowErrorState] = useState(false);
  const [showSpinnerState, setShowSpinnerState] = useState(true);
  //const [showSpinner, setShowSpinner] = useState(false);
  const store = useSelector((state) => state);
  useEffect(() => {
    setShowErrorTimeOut();
  }, [store?.servers?.list]);

  //clearTimeout(timer);
  return (
    <>
      <div className="d-flex dashboard-card">
        <div className="w-100">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2>Current Server List</h2>
            </div>
          </div>
          <div className="field">
            {showTable()}
            {showSpinner()}
            {showError()}
          </div>
        </div>
      </div>
    </>
  );

  function showSpinner() {
    return (
      <>
        {showSpinnerState && !store?.servers?.list && !showErrorState && (
          <div className="w-100 d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </>
    );
  }

  function showError() {
    return (
      <>
        {showErrorState && !store?.servers?.list && (
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Oh Snap!</h4>
            <p>Unfortunately, there were problems connecting to the server!</p>
            <hr />
            <p className="mb-0">
              Try restarting the page, if the error persists, use technical
              support
            </p>
          </div>
        )}
      </>
    );
  }

  function showTable() {
    return (
      <>
        {store?.servers?.list && (
          <table className="table">
            <tbody>
              {store?.servers?.list.map((server) => (
                <tr key={uuidv4()}>
                  <td key={uuidv4()}>
                    <Link to={`/servers/${server.id}`} className="server-name">
                      <h5>{server.name}</h5>
                    </Link>
                  </td>
                  <td key={uuidv4()}><p>{server.id}</p></td>
                  <td key={uuidv4()}><p>{server.memberCount}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }

  function setShowErrorTimeOut(){
    let timeOut = setTimeout(() => {
      setShowErrorState(true);
    }, 5000);
  }
};
export default ServerListCard;
