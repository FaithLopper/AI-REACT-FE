
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";


import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SubChargeScreen from "./Screens/SubChargeScreen";
import SigninScreen from "./Screens/SigninScreen"
import SignupScreen from "./Screens/SignupScreen"

function App() {
  return (
    <BrowserRouter>
      
      
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
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
