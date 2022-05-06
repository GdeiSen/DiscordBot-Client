import React from "react";
import { v4 as uuidv4 } from 'uuid';
function showTable(props) {
  if (props.children) {
    return (
      <div className='field'>
        <table className="table">
          <thead>
            <tr key={uuidv4()}>{Object.keys(props.children[0]).map((key) => (<th key={uuidv4()}>{key}</th>))}</tr>
          </thead>
          <tbody>
            {props.children.map((server) => (
              <tr key={uuidv4()}>{Object.values(server).map((element) => (<td key={uuidv4()}>{element}</td>))}</tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div className={props.isVisible ? "w-100" : "hide_container"}>
        <div className="d-flex justify-content-center w-100 margin-top">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
}

const UserListCard = (props) => {
  return (<>
    {props && <>
      <div className={props.isVisible ? "w-100" : "hide_container"}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><p onClick={() => props.hideInfo()} className="pointer">Servers</p></li>
            <li className="breadcrumb-item active" aria-current="page">{props.currentServer?.ServerName}</li>
          </ol>
        </nav>
      </div>
      <div className={props.isVisible ? "d-flex dashboard-card" : "hide_container"}>
        <div className="w-100">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2>Server - {props.currentServer?.ServerName}</h2>
            </div>
            <div className="d-flex">
              <button className="btn button-bg" type="submit"><i className="bi bi-arrow-clockwise"></i></button>
            </div>
          </div>
          <div className="field">
            <div className="row d-flex align-items-center">
              <div className="col-1"><h1>!</h1></div>
              <div className="col-11"><p>Please note that this option is limited! If the discord limit is exceeded, the ability to select a list of users may be disabled. This option will need to be disabled on the intermediate server to avoid further misunderstandings! You should also pay attention to the duration of the data request, which may exceed the quota for the discord request and further blocking!</p></div>
            </div>
          </div>
          <div className="mh-50">
            {showTable(props)}</div>
            <h5>Total User Count: {props?.children?.length}</h5>
        </div>
      </div> </>}
  </>
  )
}
export default UserListCard