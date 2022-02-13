import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';

import Home from "./pages/Home"
import BizLogin from "./pages/BizLogin"
import BizSignup from "./pages/BizSignup"
import TransporterLogin from "./pages/TransporterLogin"
import TransporterSignup from "./pages/TransporterSignup"
import TransporterDashboard from "./pages/TransporterDashboard"
import BizDashboard from "./pages/BizDashboard"


function App() {
  return (<>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route exact path="/biz/login" element={(localStorage.getItem("user") && (localStorage.getItem("userType")==='biz') )?<Navigate to="/biz/dashboard"/>: <BizLogin />} />
      </Routes>
      <Routes>
        <Route exact path="/biz/signup" element={<BizSignup />} />
      </Routes>
      <Routes>
        <Route exact path="/transporter/login" element={(localStorage.getItem("user") && (localStorage.getItem("userType")==='transporter') )?<Navigate to="/transporter/dashboard"/>: <TransporterLogin />} />
      </Routes>
      <Routes>
        <Route exact path="/transporter/signup" element={<TransporterSignup />} />
      </Routes>

      <Routes>
        <Route exact path="/transporter/dashboard" element={(localStorage.getItem("user") && (localStorage.getItem("userType")==='transporter') )? <TransporterDashboard />:<Navigate to="/transporter/login"/>} />
      </Routes>
      <Routes>
        <Route exact path="/biz/dashboard" element={(localStorage.getItem("user") && (localStorage.getItem("userType")==='biz') )? <BizDashboard />:<Navigate to="/biz/login"/>} />
      </Routes>

    </Router>
  </>
  );
}

export default App;
