import React from 'react'
import '../App.css'


function Header() {
  return (
    <>
     <div classNameName='container-fuild'>
        <div classNameName='row'>
            <div classNameName='col-md-12'>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">APP LOGO</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item ">
          <a className="nav-link  active" aria-current="page" href="#">DASHBOARD</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CREATE ADS</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
            </div>
        </div>
     </div>
    </>
  )
}

export default Header
