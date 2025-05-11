import React, { useState } from 'react'

function Search() {

  return (
    <>
      <h2>Search</h2>
      <form >
        <div className='row g-3 align-items-center'>
            <div className='col-auto'>
                <label className='col-form-label'>Search</label>                
            </div>
            <div className='col-auto'>
                <input type="text"  id="search" className='form-control' />
            </div>
            <div className='col-auto'>
                <input type="submit" className='btn btn-primary' value="Search"   />
            </div>
        </div>
      </form>
    </>
  )
}

export default Search
