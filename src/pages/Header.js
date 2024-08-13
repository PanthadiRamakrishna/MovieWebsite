import React from "react";
import "./Header.css";
import NavListItem from "../components/NavListItem";
import navListData from "../data/NavListData";
import Search from "../components/Search";
import Button from "../components/Button";

function Header({ scroll }) {
  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
      <a href="/" className="logo">
        cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search />
      <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="Sign In"
      />
    </header>
  );
}

export default Header;
