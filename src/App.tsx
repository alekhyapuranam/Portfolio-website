

import { Route, Routes } from 'react-router'
import { About } from './About'
import './App.css'
import { ContactUs } from './Contactus'
import { HomeComponent } from './Home'
import { Projects } from './Projects'
import { Skills } from './Skills'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HomeComponent/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/Contactus' element={<ContactUs/>}></Route>
    </Routes>

   
    
    </>
    
  )
}

export default App
