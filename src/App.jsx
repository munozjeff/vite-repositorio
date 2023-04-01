import { useState } from 'react'
import { InitialPage } from './pages/initial_page'
import { BrowserRouter as Router, HashRouter, Routes, Route} from 'react-router-dom';
import { About } from './pages/about';
import { Works } from './pages/works';
import { Contacts } from './pages/contacts';
// import { InitialPage } from './pages/initial_page'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<InitialPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
