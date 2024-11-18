import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Location", path: "/location" },
    { id: 3, label: "Services", path: "/services" },
    { id: 4, label: "About Us", path: "/about-us" },
    { id: 5, label: "Franchise with Us", path: "/franchise-with-us" },
  ];

  return (
    <nav className="bg-[#FD6845] p-4 flex justify-between items-center">
      <div className="flex">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-white text-[14px] px-4 py-2 hover:bg-orange-400 rounded font-light"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
