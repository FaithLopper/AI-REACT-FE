import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SubChargeScreen from "./Screens/SubChargeScreen";
import SigninScreen from "./Screens/SigninScreen";
import SignupScreen from "./Screens/SignupScreen";
import Slidebar from "./components/layout/Slidebar";
import Mainnav from "./components/layout/Mainnav";
import Main from "./components/Main";
import Footer from "./components/layout/Footer";
import Textract from "./Screens/Textract";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="layer" />
        <a className="skip-link sr-only" href="#skip-target">
          Skip to content
        </a>
        <div className="page-flex">
          <Slidebar />
          <div className="main-wrapper">
            <Mainnav />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/textract" element={<Textract />} />

            </Routes>
            <Footer />
          </div>
        </div>
      </div>

      <Routes>
        <Route />
        <Route path="/signup" element={<SignupScreen />} />

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/user/charge/submit" element={<SubChargeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
