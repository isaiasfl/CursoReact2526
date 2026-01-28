import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Header />
      <main className='max-w-4xl mx-auto mt-10 bg-white shadow-md border border-slate-200'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App