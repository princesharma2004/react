import { useState } from 'react'
import { Header, Footer } from './components'
import './App.css'
import { Outlet } from 'react-router'

function App()
{
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <Outlet />
        {/* <Home /> <About /> <Contact /> <Github /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
