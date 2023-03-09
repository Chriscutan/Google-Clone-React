import React from "react";
import "../pages/Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <div className="home__header">
        <div className="header__left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header__right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      {/* Body (Google Search Bar) */}
      <div className="home__body">
        <center>
          <img
            className="home__body__img"
            alt=""
            src="https://imgs.search.brave.com/-kAVM45Lkw7fu9zKrN-Qfcpyg7i_jcKNzR3DSu1bTqo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93ZWJz/dG9ja3Jldmlldy5u/ZXQvaW1hZ2VzL2dv/b2dsZS1jbGlwYXJ0/LWVtYmxlbS0zLnBu/Zw"
          />
        </center>
        <div className="home__inputContainer">
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
