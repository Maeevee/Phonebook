import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Register from './pages/RegisterPage/RegisterPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { lazy, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { refreshUser } from './redux/auth/authOperations';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
