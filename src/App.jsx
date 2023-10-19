import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Alllist from './components/Alllist';
import Fsd from './components/Fsd';
import Datascience from './components/Datascience';
import Cyber from './components/Cyber';
import Career from './components/Career';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card1Ds from './components/Card1Ds';
 function App() {

  return (
    <div  >
      <h1>courses</h1>
    <Router>
      <div className='hello'>
          <Link to='/' style={{ padding: 10}} >ALL</Link>
        <Link to='/fsd'style={{padding:10}}>FULL STACK DEVELOPEMENT</Link>
          <Link to='/datascience' style={{ padding: 10 }}>DATA SCIENCE</Link>
          <Link to='/cyber' style={{ padding: 10 }}>CYBER SECURITY</Link>
          <Link to='/career' style={{ padding: 10 }}>CAREER</Link>
          
          <hr />
      </div>
      <Routes>
      <Route path='/' element={<Alllist />} />
          <Route path='/fsd' element={<Fsd />} />
          <Route path='/datascience' element={<Datascience />} />
          <Route path='/cyber' element={<Cyber />} />
          <Route path='/career' element={<Career />} />
          <Route path='/fsd/card1' element={<Card1 />} />
          <Route path='/fsd/card2' element={<Card2 />} />
          <Route path='/fsd/card3' element={<Card3 />} />
          <Route path='/ds/card1Ds' element={ <Card1Ds/>} />
    </Routes>
      </Router>
      </div>
  )
}
export default App;