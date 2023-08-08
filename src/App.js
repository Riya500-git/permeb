import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import Transac from './Transac';
import Wallets from './Wallets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/transac" element={<Transac />} />
        <Route path="/wallets" element={<Wallets />} />
      </Routes>
    </Router>
  );
}

export default App;
