import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './components/AboutPage'
import { ContactPage } from './components/ContactPage'
import { ROUTES } from './config'

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.main} element={<Layout />}></Route>
        <Route path={ROUTES.about} element={<AboutPage />}></Route>
        <Route path={ROUTES.contact} element={<ContactPage />}></Route>
      </Routes>
    </>
  )
}

export default App
