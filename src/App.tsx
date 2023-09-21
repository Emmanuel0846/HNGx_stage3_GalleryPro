import {Routes, Route} from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Signup from './pages/Signup'
import Login from './pages/Login';
import { AuthProvider } from './context/auth'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'
import Home from './pages/Home';



function App() {

  return (
    <AuthProvider>
       <Routes>
          <Route path='/' element={
            <PublicRoute>
              <Home />
            </PublicRoute>
            } />
          <Route path='/dashboard' element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
            } />
          <Route path='/signup' element={
            <PublicRoute>
              <Signup/>
            </PublicRoute>
            } />
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
            } />
       </Routes>
    </AuthProvider>
    
  )
}

export default App
