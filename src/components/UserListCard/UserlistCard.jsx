import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import WarningField from "../WarningField/WarningField";
import "../main.scss";
import "./UserList.scss";
const UserListCard = () => {
  const store = useSelector((state) => state);
  const [showErrorState, setShowErrorState] = useState(false);
  const [showSpinnerState, setShowSpinnerState] = useState(true);

  useEffect(() => {
    setShowErrorState(false);
    setShowSpinnerState(true);
    setShowErrorTimeOut();
  }, [store?.servers?.currentServer?.users]);

  return (
    <>
      <div className="d-flex dashboard-card">
        <div className="w-100">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2>Server - {store.servers?.currentServer?.server?.name}</h2>
            </div>
          </div>
          <WarningField>
            Please note that this option is limited! If the discord limit is
            exceeded, the ability to select a list of users may be disabled.
            This option will need to be disabled on the intermediate server to
            avoid further misunderstandings! You should also pay attention to
            the duration of the data request, which may exceed the quota for the
            discord request and further blocking!
          </WarningField>
          <div className="field">
            {showTable()}
            {showSpinner()}
            {showError()}
          </div>
        </div>
        <h5>
          Total User Count: {store?.servers?.currentServer?.users?.length}
        </h5>
      </div>
    </>
  );

  function showTable() {
    return (
      <>
        {store?.servers?.currentServer?.users && (
          <table className="table">
            <tbody>
              {store.servers.currentServer.users.map((user) => (
                <tr key={uuidv4()} className = "wrap">
                  <td key={uuidv4()}>{user.displayAvatarURL}</td>
                  <td key={uuidv4()}>{user.displayName}</td>
                  <td key={uuidv4()}>{user.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }

  function showSpinner() {
    return (
      <>
        {showSpinnerState &&
          !store?.servers?.currentServer?.users &&
          !showErrorState && (
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
        {showErrorState && !store?.servers?.currentServer?.users && (
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

  function setShowErrorTimeOut() {
    let timeOut = setTimeout(() => {
      setShowErrorState(true);
    }, 5000);
  }
};
export default UserListCard;
