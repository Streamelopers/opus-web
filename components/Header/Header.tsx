import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    // <div className="header-container">
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    //     <Link href="/">
    //       <a className="navbar-brand">Opus</a>
    //     </Link>
    //     <button
    //       onClick={() => setIsOpen(!isOpen)}
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className={`collapse navbar-collapse ${isOpen && "show"}`} id="navbarSupportedContent">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item">
    //           <Link href="/login">
    //             <a className="nav-link">Post a Job</a>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link href="/login">
    //             <a className="nav-link">Login</a>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link href="/register">
    //             <a className="nav-link">Register</a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
};
export default Header;
