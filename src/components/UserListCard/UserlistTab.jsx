import React from "react";
import { v4 as uuidv4 } from 'uuid';
function showTable(props) {
  if (props.children) {
    return (
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
              <h2>{props.currentServer?.ServerName}</h2>
            </div>
            <div className="d-flex">
              <button className="btn button-bg" type="submit"><i className="bi bi-arrow-clockwise"></i></button>
            </div>
          </div>
          <div className="mh-50">
            {showTable(props)}</div>
        </div>
      </div> </>}
  </>
  )
}
export default UserListCard