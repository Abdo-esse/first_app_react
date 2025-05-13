import React from 'react'

function UsersAdd() {
  return (
    <>
    <h1>Add users</h1>
    <div className='mb-3 row'>
        <label htmlFor="currentId" className='col-sm-2 col-form-label'>Current ID</label>
        <div className='col-sm-10'>
            <input type="text" className='form-conrol-plaintext'id="currentId" value="???" />
        </div>
    </div>
    <div className='mb-3 row'>
        <label htmlFor="fullName" className='col-sm-2 col-form-label'>Full Name</label>
        <div className='col-sm-10'>
            <input type="text" className='form-conrol'id="fullName"  />
        </div>
    </div>
    <div className='mb-3 row'>
        <label htmlFor="country" className='col-sm-2 col-form-label'>Country</label>
        <div className='col-sm-10'>
           <select className='form-select'id="">
             <option selected>Select your country</option>
             <option value="1">Morocco</option>
             <option value="1">Morocco</option>
             <option value="1">Morocco</option>
             <option value="1">Morocco</option>
           </select>
        </div>
    </div>
      
    </>
  )
}

export default UsersAdd
