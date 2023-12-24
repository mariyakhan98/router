import React from 'react'
import Header from './Header'
// import './App.css';

function Createadd() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
               <Header/>
           
            </div></div>
            <div class="row mt-4 ps-5">
                        <div class="col-md-12 d-flex-justify-content-center ">
                            <div class="popup" id="popup">
                                <img src='../assets/cart3.jpeg'/>
            </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-end'>
        <button type="button" class="btn btn-primary">Next</button>

        </div>
      </div>
    </div>
    </div>
      
   
  )
}

export default Createadd
