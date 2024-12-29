import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

/* Components */
import NavBar from './components/navBar';

/* Pages */

import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import CategoriesPage from './pages/CategoriesPage';
import Member from './pages/Member';
import Weather from './pages/Weather';

/* Font(s) */

import 'typeface-montserrat';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/TrendingPage" element={<TrendingPage />} />
        <Route path="/CategoriesPage" element={<CategoriesPage />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
