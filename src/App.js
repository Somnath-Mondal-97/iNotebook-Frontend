import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import ColorPalletButtons from './Components/ColorPalletButtons';
import { useEffect } from 'react';
import YourNotes from './Components/YourNotes';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';

function App() {

  useEffect(()=>{
    document.body.classList.add('bg-success')
    document.body.classList.add('text-white')
    // eslint-disable-next-line 
  },[])

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('text-white')
    document.body.classList.remove('text-black')
  }

  
  const changingMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if(document.body.classList.contains('bg-success')){
      document.body.classList.add('text-white')
    }else if(document.body.classList.contains('bg-danger')){
      document.body.classList.add('text-white')
    }else{
      document.body.classList.add('text-black')
    }
  }

  return (
    <>
    <NoteState>
    <Router>
    <Navbar heading='iNotebook'/>
    <ColorPalletButtons height={32} width={32} fill="black" toggleMode={changingMode}/>
    <Routes>
      <Route exact path='/' element={<Home heading="iNotebook - Your Notebook on Cloud"/>}/>
      <Route exact path='/about' element={<About heading="About iNotebooks"/>}/>
      <Route exact path='/yourNotes' element={<YourNotes heading="Your iNotes" height={24} width={24} fill="black"/>}/>
      <Route exact path='/login' element={<LogIn/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
