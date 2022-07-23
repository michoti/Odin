import React from 'react'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

export const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Contact/>
    </>
  )
}
