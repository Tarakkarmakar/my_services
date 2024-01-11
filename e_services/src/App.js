import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <div className='bg-slate-50' >
    <Navbar />
    <MainRoutes />
    </div>
  );
}

export default App;
