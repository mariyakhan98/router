import React,{useState} from 'react'
import MOCK_DATA from '../MOCK_DATA.json'
import Header from './Header'

function Table() {
  const [data, setdata] = useState(MOCK_DATA)
  const [order, setorder] = useState("ASC")
  const sorting =(col)=>{
    if (order ==="ASC"){
      const sorted = [...data].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("DSC");
    }
    if (order ==="DSC"){
      const sorted = [...data].sort((a,b)=>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("ASC");
    }
  };
  return (
    <div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <Header/>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-md-6'>
        <table class="table border">
  <thead>
    <tr>
    <th scope="col">Ad Insights</th>
    </tr>
    <tr>
      <th scope="col">campaign<i class='bx bx-chevron-down' onClick={()=>sorting("campaign")}></i></th>
      <th scope="col">Clicks<i class='bx bx-chevron-down'onClick={()=>sorting("clicks")}></i></th>
      <th scope="col">Cost<i class='bx bx-chevron-down'onClick={()=>sorting("cost")}></i></th>
      <th scope="col">conversion<i class='bx bx-chevron-down'onClick={()=>sorting("conversion")}></i></th>
      <th scope="col">revenue<i class='bx bx-chevron-down'onClick={()=>sorting("revenue")}></i></th>
    </tr>
  </thead>
  <tbody>
    {data.map((d)=>(
      <tr key = {d.id}>
       {/* <th scope="row"></th> */}
      <td>{d.campaign}</td>
      <td>{d.clicks}</td>
      <td>{d.cost}</td>
      <td>{d.conversion}</td>
      <td>{d.revenue}</td>
      </tr>
    ))}
    
      
    
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
        </div>
        <div className='col-md-6'>
        <table class="table border">
  <thead>
    <tr>
    <th scope="col">Ad Insights</th>
    <th scope='col'><button type="button" className="btn btn-light border d-flex justify-content-end">Click<i class='bx bx-chevron-down'></i></button></th>
    {/* <th scope='col' className=''><i class='bx bx-help-circle'></i></th> */}
    </tr>
    <tr>
    <th scope='col'><img src="../assets/image.jpeg" className="img-fluid h-100" alt="..."/></th>
    </tr>
    

   
    </thead>
     </table>
        </div>
      </div>
    </div>
    </div>
  
      
    
  )
}

export default Table