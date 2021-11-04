import React, { useState, useEffect } from "react";
import DevicesList from "../data/Devices";

const Device = () => {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    setPhones(DevicesList);
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
      setPhones(DevicesList);
      return;
    }
    setPhones(DevicesList.filter((phone) => phone.brand == e.target.value));
  };

  return (
    <>
      <div className="container">
        <h4>All Devices</h4>

        <label>Browser Select</label>
        <select  onChange={onChange} className="browser-default">
          <option value="" disabled></option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
        </select>

        <table>
          <thead>
            <tr>
              {Object.keys(DevicesList[0]).map((field) => (
                <th>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {phones && phones.map((object) => (
              <tr>
                {Object.values(object).map((element) => (
                  <td>{element}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Device;
