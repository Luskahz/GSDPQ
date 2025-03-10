import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import HistoricoGsd from "./pages/historicoGsd"
import Profile from "./pages/profile"
import Header from "./components/header"

export default function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/HistoricoGsd" element={<HistoricoGsd />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  </Router>
  )
}

