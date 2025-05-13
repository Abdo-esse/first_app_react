import React from 'react'

function UsersTable({users}) {
const displayUsers = () => {
  if (users.length === 0) {
    return (
      <tr>
        <td colSpan={3} align="center">No users</td>
      </tr>
    );
  }

  return users.map((item, key) => (
    <tr key={key}>
      <td>{item.id}</td>
      <td>{item.fullName}</td>
      <td>{item.country}</td>
    </tr>
  ));
};

  return (
    <>
      <h1>Users</h1>
      <table className="table table-striped table-inverse table-resposiv ">
        <thead className='thead-inverse'>
            <tr>
                <th>#Id</th>
                <th>Full Name</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
           {displayUsers()}
        </tbody>
      </table>
      
    </>
  )
}

export default UsersTable
