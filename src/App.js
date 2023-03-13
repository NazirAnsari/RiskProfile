import React from 'react'
import Accodion from './accordion/Accodion'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import ThankYouPage from './accordion/ThankYouPage'
import Popup from './accordion/Popup'
export default function App() {
  return (
    <div>
      
<BrowserRouter>
<Routes>
  <Route path='/' element={<Accodion/>}></Route>
  <Route path='popUpScreen' element={<Popup/>}></Route>
  <Route path='/ThankYouPage' element={<ThankYouPage/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}
