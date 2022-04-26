import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const ServerListCard = (props) => {
    const [showError, setShowError] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    let timer;
    useEffect(() => {
        if (!props.children) {
            setShowSpinner(true);
            timer = setTimeout(() => {
                setShowError(true);
                setShowSpinner(false);
            }, 5000)
        }
    }, [props.children])
    if (props.children) {
        clearTimeout(timer);
        return (
            <>{props.children &&
                <div className={props.isVisible ? "d-flex dashboard-card" : "hide_container"}>
                    <div className="w-100">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <h2>Current Server List</h2>
                            </div>
                            <div className="d-flex">
                                <button className="btn button-bg" type="submit"><i className="bi bi-arrow-clockwise"></i></button>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    {props?.children && Object.keys(props.children[0]).map((key) => (<th scope="col" key={key}>{key}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                {props.children && props.children.map((server) => (
                                    <tr key={uuidv4()}>
                                        {props.children && Object.values(server).map((element) => (<td key={uuidv4()}>{element}</td>))}
                                        <td key={uuidv4()}><i className="small material-icons pointer"
                                            onClick={() =>
                                                props.showInfo(server)
                                            }>chevron_right</i></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table></div></div>}</>
        )
    }
    else {
        return (<>
            <div className="d-flex justify-content-center w-100">
                {showSpinner && <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
            </div>
            <div className="d-flex mr-5" >
                {showError && <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Oh Snap!</h4>
                    <p>Unfortunately, there were problems connecting to the server!</p>
                    <hr />
                    <p className="mb-0">Try restarting the page, if the error persists, use technical support</p>
                </div>}
            </div>
        </>)
    }
}
export default ServerListCard