import React, { useEffect } from "react";
import { useState } from "react";
const UserList = (props) => {

  const [filter, setFilter] = useState(props.children);

  const getSearch = () => {
    if (filter) {
      return filter;
    }
    return props.children;
  };

  useEffect(() => {
    setFilter(props.children);
  }, [props.children]);

  const userSearch = getSearch();

  const onChange = (e) => {
    setFilter(
      props.children.filter((user) => {
        return user.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };
  
  return (
    <>
      {props.search && (
        <div className="row">
          <div className="input-field col s">
            <i className="material-icons prefix">search</i>
            <textarea
              onChange={onChange}
              id="icon_prefix2"
              className="materialize-textarea"
              placeholder="search"
            ></textarea>
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Mail</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {props.children && userSearch.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.mail}</td>
                <td>
                  <i
                    className="material-icons pointer"
                    onClick={() => props.deleteUser(user.id)}
                  >
                    delete
                  </i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
