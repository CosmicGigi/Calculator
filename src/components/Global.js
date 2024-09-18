import React from "react";
import { calculator, todolist } from "../routes";
import { NavLink } from "react-router-dom";

const navLinks = [
  { path: calculator, label: "Calculatrice" },
  { path: todolist, label: "To-Do List" },
];

const Global = () => {
  return (
    <div className="dashboard">
      <h1>My Dashboard</h1>
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Global;
