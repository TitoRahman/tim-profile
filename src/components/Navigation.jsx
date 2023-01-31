import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Outlet,
  Routes,
} from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Router>
        {/* <div className="bg-neutral-700">
          <Navbar className={navbar ? "navbar-active" : "navbar-inactive"}>
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
        </div> */}

        <Disclosure
          as="nav"
          className={navbar ? "navbar-active" : "navbar-inactive"}
        >
          {({ open }) => (
            <>
              <div className="px-4 sm:px-6 lg:px-20">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-2xl tracking-wider">
                      <NavLink to="/">Speedwagon</NavLink>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center">
                      <div className="hidden md:block">
                        <div className="gap-2 flex items-baseline space-x-6">
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
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-second-dark p-2 text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden pb-4">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      x-data={false}
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? "menu-m-active" : "menu-m-inactive"
                      }
                      end
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div>
          <Outlet />
        </div>

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
};
export default Navigation;
