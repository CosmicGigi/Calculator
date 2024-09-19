import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { calculator, home, todolist } from "../routes";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: home, label: "Menu" },
    { path: calculator, label: "Calculator" },
    { path: todolist, label: "To-Do List" },
  ];

  return (
    <div className="header">
      <div>
        <h1>Gigi World</h1>
      </div>
      <button className="menu" onClick={toggleMenu}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className="nav-link">
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default DropdownMenu;
