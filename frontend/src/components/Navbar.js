import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{background:"#E7F1F5"}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/" style={{fontWeight:600}}>TransportGood</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
   
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li className="nav-item dropdown">
          <div className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Biz
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/biz/login">Login</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/biz/signup">Signup</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Transproters
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/transporter/login">Login</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/transporter/signup">Signup</a></li>
          </ul>
        </li>

        {localStorage.getItem("user") && <li className="nav-item">
          <button className="btn btn-danger text-white" href="/about" onClick={()=>{localStorage.removeItem("user"); window.location.reload();}}>Logout</button>
        </li>}
      
      </ul>
      
    </div>
  
  </div>
</nav>
    </>
  )
}

export default Navbar