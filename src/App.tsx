import {Routes, Route} from "react-router-dom"
import './App.css';
import FreelancerOffersList from "./Pages/FreelancerOffersList";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/freelancer" element={<FreelancerOffersList />}/>
        <Route path="/employer" element={<FreelancerOffersList />}/>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
