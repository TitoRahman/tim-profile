import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Outlet,
  Routes,
} from "react-router-dom";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Proyek from "../pages/Proyek.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Proyek", to: "/proyek" },
  { name: "Contact", to: "/contact" },
];

class Navbar extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "menu-active" : "menu-inactive"
                }
                end
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <Outlet />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="proyek" element={<Proyek />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default Navbar;
