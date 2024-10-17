import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/auth/signup/SignupPage";
import LoginPage from "./pages/auth/login/LoginPage";
import NotificationPage from "./pages/notification/NotificationPage";

import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

function App() {

  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>

      <RightPanel />
    </div>
  );
}

export default App;
