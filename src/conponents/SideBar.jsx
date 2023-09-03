import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/pngegg.png";
const SideBar = ({ btnControl ,sidebar, handelClick }) => {
  return (
    <div className="sidebar col col-md-4 col-lg-3 position-fixed" ref={sidebar} style={{zIndex: '10000'}}>
      <div className="sidebar-header py-4">
        <button ref={btnControl} className="sidebar-control btn p-0" onClick={handelClick}>
          <i class="fa-solid fa-2xl fa-square-caret-left"></i>
        </button>
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img src={logo} />
          <h1 className="fs-4 px-2">CryptoVision1</h1>
        </Link>
      </div>
      <ul class="sidebar-links navbar-nav gap-2 mt-4 fw-medium text-light">
        <li class="nav-item d-flex align-items-center rounded px-2 py-1">
          <i class="fa-solid fa-house pe-2"></i>
          <Link class="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li class="nav-item d-flex align-items-center rounded px-2 py-1">
          <i class="fa-brands fa-bitcoin pe-2"></i>
          <Link class="nav-link" to="cryptocurrencies">
            Cryptocurrencies
          </Link>
        </li>
        <li class="nav-item d-flex align-items-center rounded px-2 py-1">
          <i class="fa-solid fa-newspaper pe-2"></i>
          <Link class="nav-link" to="cryptoNews">
            CryptoNews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
{
  /* <i class="fa-solid fa-square-caret-right"></i> */
}
