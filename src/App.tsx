import { Routes, Route } from "react-router-dom"
import './App.css';
import FreelancerPage from "./Pages/FreelancerPage";
import EmployerPage from "./Pages/EmployerPage";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/freelancer" element={<FreelancerPage />} />
        <Route path="/employer" element={<EmployerPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
