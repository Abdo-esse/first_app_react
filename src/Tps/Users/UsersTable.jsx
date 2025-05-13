import React, { useContext } from 'react'
import { UsersContext } from './UsersApp';
import { Link } from 'react-router-dom';

function UsersTable({users}) {
    const context=useContext(UsersContext)
const displayUsers = () => {
  if (context.users.length === 0) {
    return (
      <tr>
        <td colSpan={3} align="center">No users</td>
      </tr>
    );
  }
  
  return context.users.map((item, key) => (
    <tr key={key}>
      <td>{item.id}</td>
      <td>{item.fullName}</td>
      <td>{item.country}</td>
      <td>
        <Link to={`/user/${item.id}/edit`} className='btn btn-primary mx-1'>Update</Link>
        <Link to={`/user/${item.id}/delete`} className='btn btn-danger'>delete</Link>
      </td>
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
                <th>Operation</th>
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
