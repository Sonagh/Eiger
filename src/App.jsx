import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavbar from "@layout/BottomNavbar.jsx";
import Header from "@layout/Header.jsx";
import Home from "@pages/Home.jsx";
import Messages from "@pages/Messages.jsx";
import Help from "@pages/Help.jsx";

function App() {
  return (
    <Router>
      <main className="has-gradient px-4 pt-3 pb-32">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
      <BottomNavbar />
    </Router>
  )
}

export default App
