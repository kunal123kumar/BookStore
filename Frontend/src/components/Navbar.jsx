import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Login from "./Login";

const Navbar = () => {
  const Navitems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/contactus">Contact</a>
      </li>
      <li>
        <a href="/aboutus">About</a>
      </li>
    </>
  );

  const [sticky, setSticky] = useState(false);
  const [islogin, setIslogin] = useState(false);

  // Check login status on mount and when storage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const login = localStorage.getItem("login");
      setIslogin(login === "true");
    };

    // Check on mount
    checkLoginStatus();

    // Listen for custom login event
    window.addEventListener("loginStatusChanged", checkLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", checkLoginStatus);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setIslogin(false);
    
    // Dispatch custom event
    window.dispatchEvent(new Event("loginStatusChanged"));
  };

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          sticky ? "bg-white dark:bg-slate-800 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white dark:bg-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {Navitems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">BOOKSTORE</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{Navitems}</ul>
            </div>
            
            
            {/* Conditional rendering based on login state */}
            {islogin ? (
              <div>
                <button
                  className="btn btn-outline btn-error"
                  onClick={handleLogout}
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() =>
                    document.getElementById("login_modal").showModal()
                  }
                >
                  LOGIN
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Render the Login modal component here */}
      <Login />
    </>
  );
};

export default Navbar;