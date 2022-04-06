import React from "react";

function List(props) {
  const { list } = props;
  console.log('props :>> ', props);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr styles={{width: '50%'}}>
            <th styles={{width: '50%'}}>First Name</th>
            <th styles={{width: '50%'}}>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {list && list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
