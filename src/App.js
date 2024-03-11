
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import Details from './pages/details/details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />

        {/* User */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
