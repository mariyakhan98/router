// import logo from './logo.svg';
import './App.css';

import Table from './Component/Table';
import Next from './Component/Next';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Createadd from './Component/Createadd';

function App() {
  return (
  
    <>
    <BrowserRouter>
    <Routes>
    
    {/* <Route path="/" element={<Header />} /> */}
    <Route path="/" element={<Table />} />
    <Route path="/createadd" element={<Createadd />} />
     <Route path="/next" element={<Next />}/> 
     {/* <Route path="/header" element={<Header/>}/>
     <Route path="/footer" element={<Footer/>}/>  */}
    </Routes>
    </BrowserRouter>
        </>
  );
}

export default App;
