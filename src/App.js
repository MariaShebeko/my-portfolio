import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './components/AboutPage'
import { ContactPage } from './components/ContactPage'
import { ROUTES } from './config'
import { HomePage } from './components/HomePage/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.main} element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path={ROUTES.about} element={<AboutPage />}></Route>
        </Route>

        <Route path={ROUTES.contact} element={<ContactPage />}></Route>
      </Routes>
    </>
  )
}

export default App
