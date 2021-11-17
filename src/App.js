import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import Login from './containers/login';
import Register from './containers/register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
