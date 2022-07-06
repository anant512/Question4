import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home page/HomePage.component';
import ContactUs from './pages/ContactUs/ContactUs.component';
import Services from './pages/Ourservices/Services.component';
import AboutUs from './pages/About Us/AboutUs.component';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
     </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
