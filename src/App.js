
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
