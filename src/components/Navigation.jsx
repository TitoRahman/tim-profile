import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Outlet,
  Routes,
} from "react-router-dom";
import { Navbar } from "flowbite-react";

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

class Navigation extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar className="lg:px-20 py-6 bg-gray-900 text-white">
              <Navbar.Brand to="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Speedwagon
                </span>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) => (isActive ? "true" : "false")}
                    end
                  >
                    {item.name}
                  </NavLink>
                ))}
              </Navbar.Collapse>
            </Navbar>
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

export default Navigation;
