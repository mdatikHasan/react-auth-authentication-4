import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Error from './components/Error/Error';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/requireAuth/RequireAuth';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/gallery' element={<RequireAuth><Gallery></Gallery></RequireAuth>}></Route>
            <Route path='/shipping' element={<RequireAuth><Shipping></Shipping></RequireAuth>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
