
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './utils/ErrorPages'
import SecureRouter from './components/layout/secure/SecureRouter'
import LoginPage from './pages/auth/LoginPage'

function App() {
  //const [count, setCount] = useState(0)

  return (
   <BrowserRouter>


        <Routes>
        <Route index element={<LoginPage />}/> */
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/boutique/*" element={<SecureRouter />}/>
        <Route path="*" element={<ErrorPage />}/>
        </Routes>
   </BrowserRouter>
  )
}

export default App
