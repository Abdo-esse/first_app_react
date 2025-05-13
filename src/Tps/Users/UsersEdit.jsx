import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UsersContext } from './UsersApp';


function UsersEdit() {
  const context = useContext(UsersContext);
  const fullName = useRef(null);
  const country = useRef(null);
  const [curentUser, setCurentUser] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const { id } = params;
    const user = context.users.find(user => user.id === parseInt(id));
    if (user) {
      setCurentUser(user);
    } else {
      console.error('User not found');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = params;

    context.updateUser({
      payload: {
        fullName: fullName.current.value,
        country: country.current.value,
        id: parseInt(id),
      }
    });

    navigate('/');
  };

  if (!curentUser) return <p>Loading...</p>;

  return (
    <>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3 row'>
          <label htmlFor="currentId" className='col-sm-2 col-form-label'>Current ID</label>
          <div className='col-sm-10'>
            <input type="text" readOnly className='form-control-plaintext' id="currentId" defaultValue={curentUser.id} />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor="fullName" className='col-sm-2 col-form-label'>Full Name</label>
          <div className='col-sm-10'>
            <input type="text" className='form-control' id="fullName" defaultValue={curentUser.fullName} ref={fullName} />
          </div>
        </div>
        <div className='mb-3 row'>
          <label htmlFor="country" className='col-sm-2 col-form-label'>Country</label>
          <div className='col-sm-10'>
            <select className='form-select' id="country" ref={country} defaultValue={curentUser.country}>
              <option value="">Select your country</option>
              <option value="Morocco">Morocco</option>
              <option value="Agerai">Agerai</option>
              <option value="Tunisia">Tunisia</option>
            </select>
          </div>
        </div>
        <div className='d-grid gap-2'>
          <button className='btn btn-primary' type='submit'>Update</button>
        </div>
      </form>
    </>
  );
}

export default UsersEdit;
