import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import Header from './components/Header/Header'

export const App = () => {
  return (
    <>
    <Header />
    <About />
    <Contact/>
    </>
  )
}
