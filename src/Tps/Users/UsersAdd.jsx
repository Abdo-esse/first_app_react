import React, { useRef } from 'react'

function UsersAdd({lastId,onAddUser}) {
    const fullName=useRef(null)
    const country=useRef(null)
    const handelSubmit=(e)=>{
        e.preventDefault();
        onAddUser({
            payload:{
                fullName:fullName.current.value,
                country: country.current.value,
                id:lastId+1
                    }
        })

    }
      return (
    <>
    <h1>Add users</h1>
    <form onSubmit={handelSubmit}>
        <div className='mb-3 row'>
            <label htmlFor="currentId"  className='col-sm-2 col-form-label'>Current ID</label>
            <div className='col-sm-10'>
                <input type="text" readOnly className='form-conrol-plaintext'id="currentId" value={lastId+1} />
            </div>
        </div>
        <div className='mb-3 row'>
            <label htmlFor="fullName" className='col-sm-2 col-form-label'>Full Name</label>
            <div className='col-sm-10'>
                <input type="text" className='form-conrol'id="fullName"  ref={fullName} />
            </div>
        </div>
        <div className='mb-3 row'>
            <label htmlFor="country" className='col-sm-2 col-form-label'>Country</label>
            <div className='col-sm-10'>
            <select className='form-select'id="country" ref={country} >
                <option value="">Select your country</option>
                <option value="Morocco">Morocco</option>
                <option value="Agerai">Agerai</option>
                <option value="Tunisia">Tunisia</option>
            </select>
            </div>
        </div>
        <div className='d-grid gap-2'>
            <button className='btn btn-primary' type='submit'>add</button>
        </div>
    </form>
      
    </>
  )
}

export default UsersAdd
