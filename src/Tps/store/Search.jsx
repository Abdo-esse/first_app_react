

function Search({handleSearch,displayCategories}) {

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
                <input type="submit" className='btn btn-primary' value="Search" onClick={handleSearch}   />
            </div>
        </div>
        <div className='row g-3 align-items-center'>
          <h3>Categories</h3>
          <div className="btn-group">
            {displayCategories()}
          </div>
        </div>
      </form>
    </>
  )
}

export default Search
