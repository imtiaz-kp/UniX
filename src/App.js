
import { Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { tokenAuthorisationContext } from './Contexts/TokenAuth';
import { useContext } from 'react';

function App() {
  const {isAuthorized,setIsAuthorized}=useContext(tokenAuthorisationContext)
 
  return (
   <div>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/login' element={<Auth />} />
       <Route path='/register' element={  <Auth register/>} />
       <Route path='/dashboard' element={isAuthorized ?  <Dashboard/>:<Home/>} />
       <Route path='/projects' element={isAuthorized?  <Projects/>:<Home/>} /> 
       <Route path='/*' element={<Navigate to={'/'}/>} /> 
     </Routes>
    < Footer/>
   </div>
  );
}

export default App;
