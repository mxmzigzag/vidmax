import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { id: 0, title: "Home", url: "/" },
  { id: 1, title: "Schedule", url: "/schedule" },
  { id: 2, title: "Movies", url: "/movies" },
  { id: 3, title: "News", url: "/news" },
];

const linkStyle = "text-white text-xl mx-5";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between relative">
      {navItems.map((item) => {
        const isActive = location.pathname === item.url;
        return (
          <div key={item.id} className="relative group">
            <span
              className={`absolute left-1/2 bg-vRed rounded-full h-1.5 w-1.5 -translate-x-1/2 group-hover:opacity-100 group-hover:-top-1.5 duration-300 transition-all ${
                isActive ? "opacity-100 -top-1.5" : "opacity-0 top-1.5"
              }`}
            />
            <NavLink to={item.url} className={linkStyle}>
              {item.title}
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
}

export default NavBar;
