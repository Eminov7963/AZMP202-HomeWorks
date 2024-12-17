import React from 'react'
import "./table.css"
const Table = ({ arr, setArr }) => {
    const Delete = (studentId) => {
      setArr(arr.filter((q) => q.id !== studentId));
    };
  return (
    <div className='table'>
      <table>
        <thead>
          <tr className='head'>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {arr &&
            arr.map((s) => {
              return (
                <tr key={s.id} className='body'>
                  <td>{s.id}</td>
                  <td>{s.Name}</td>
                  <td>
                    <button className='delete' onClick={() => Delete(s.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table
