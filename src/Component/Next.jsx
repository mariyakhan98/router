import React from 'react'
import Header from './Header'

function Next() {
  return (
    <div class="container-fluid">
        <div className='row'>
            <div className='col-md-12'>
                <Header/>
            </div>
        </div>
        <div class="row h-100">
            <div class="col-md-12">
                <form class="border h-100 mt-3 ">
                    <div class="row ps-4 pe-4">
                        <div class="col-md-12">
                            <h4>Create Text & Media</h4>
                        </div>
                    </div>
                    <div class="row mt-3 ps-4 pe-4">
                        <div class="col-md-6">
                         <h5>Heading 01</h5>
                         <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Add heading that would make user inerested"/>
                         <h5>Heading 02</h5>
                         <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="Add heading that would make user inerested"/>
                        </div>
                        <div class="col-md-6">
                            <h5>Description 01</h5>
                            <textarea class="form-control h-75" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3 ps-4 pe-4">
                        <div class="col-md-6">
                            <h5>Business Name</h5>
                         <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="Add Your Business name"/>
                        </div>
                        <div class="col-md-6">
                            <h5>Button Label</h5>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                        </div>
                    </div>
                    <div class="row mt-3 ps-4 pe-4">
                        <div class="col-md-12">
                            <h5>Website URL</h5>
                            <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="Add the URL of the landing page you want to redirect users to"/>
                        </div>
                    </div>
                    <div class="row mt-5 p-4 pe-5">
                        <div class="col-md-12 d-flex justify-content-end">
                            <button type="button" class="btn btn-light border me-1">Back</button>
                            <button type="button" class="btn btn-primary">Submit</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Next