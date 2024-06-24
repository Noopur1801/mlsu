import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  
    return (
      <>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              columnGap: "600px",
              borderBottom: "3px solid black",
              backgroundColor: "#f5d7f421",
            }}
          >
            <h1 style={{ fontSize: "45px", fontWeight: "900" }}>SoleSneakers</h1>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
                fontWeight: "600",
                columnGap: "25px",
              }}
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  
}

export default Header;