import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reserva from "./components/reservas/Reserva";
import Users from "./components/users/Users";

function App() {
  return (
    <Router>
      <div>
        <Banner />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<Reserva />} />         
          <Route path="/profile" element={<Users />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
