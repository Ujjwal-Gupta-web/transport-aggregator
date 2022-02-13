import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';

import Home from "./pages/Home"
import BizLogin from "./pages/BizLogin"
import BizSignup from "./pages/BizSignup"
import TransporterLogin from "./pages/TransporterLogin"
import TransporterSignup from "./pages/TransporterSignup"


function App() {
  return (<>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route exact path="/biz/login" element={<BizLogin />} />
      </Routes>
      <Routes>
        <Route exact path="/biz/signup" element={<BizSignup />} />
      </Routes>
      <Routes>
        <Route exact path="/transporter/login" element={<TransporterLogin />} />
      </Routes>
      <Routes>
        <Route exact path="/transporter/signup" element={<TransporterSignup />} />
      </Routes>

    </Router>
  </>
  );
}

export default App;
