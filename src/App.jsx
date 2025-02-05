import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Crowdfunding } from "./pages/Crowdfunding/Crowdfunding";
import { Events } from "./pages/Events/Events";
import { Jobs } from "./pages/Jobs/Jobs";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crowdfunding" element={<Crowdfunding />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
