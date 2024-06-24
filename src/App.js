import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/Pagess/About';
import Layouts from './Component/Layout/Layouts';
import Product from './Component/Module/Product';
import LearnHooks from './Component/Module/LearnHooks';
import Home from './Component/Pagess/home';
import Contact from './Component/Pagess/Contact';
import Footer from './Component/Layout/Footer';
import Login from './Component/Layout/Login';
import Add from './Component/Add/Add';
import List from './Component/Module/List';



function App() {
  return (
    
      <>
        {<Add/>}
        <div>
        {<List/>}
        </div>
       
      
    </>
    // <BrowserRouter>
    //  <Routes>
    //    <Route path='/' element={<Layouts/>}>
    //      <Route exact path='/home' element={<Home/>}/>
    //      <Route path='/about' element={<About/>}/>
    //      <Route path='/product' element={<Product/>}/>
    //      <Route path='/learnhooks' element={<LearnHooks/>}/>
    //      <Route path='/contact' element={<Contact/>}/>
    //      <Route path='/Footer' element={<Footer/>}/>
    //      <Route path='/Login' element={<Login/>}/>
      
      
      
    //       </Route>
    //     </Routes>
    // </BrowserRouter>
  );
}

export default App;
