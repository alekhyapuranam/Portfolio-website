

import { Route, Routes } from 'react-router'
import './App.css'
import { HomeComponent } from './Home'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomeComponent />}></Route>

      </Routes>



    </>

  )
}

export default App
