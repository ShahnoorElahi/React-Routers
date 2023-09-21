import React from 'react';
import Home from './cmp/home'
import About from './cmp/About'
import Form from './cmp/Form'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';


class App extends React.Component{
render(){
  return(
    <div>
      <Router>
      <Link to="">Home</Link>
      <Link to="/About"> About</Link>
      <Link to="/Form"> Form</Link>
      <Routes>
      <Route exact path='/' element={<Home />} ></Route>
      <Route  path='/About' element={<About />} ></Route>
      <Route  path='/Form' element={<Form />} ></Route>
      </Routes>
      </Router>
    </div>
  );
}
}
export default App;
