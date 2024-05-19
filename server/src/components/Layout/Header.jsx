// import { Link } from "react-router-dom";

// const Header = () => {
//   const token = localStorage.getItem("token");

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light text-black bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Collection Manager
//         </Link>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/collections">
//                 Collections
//               </Link>
//             </li>
//             {token && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/user">
//                     Profile
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/admin">
//                     Admin
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//           <ul className="navbar-nav">
//             {token ? (
//               <li className="nav-item">
//                 <button
//                   className="btn btn-link nav-link"
//                   onClick={() => {
//                     localStorage.removeItem("token");
//                     window.location.href = "/";
//                   }}
//                 >
//                   Logout
//                 </button>
//               </li>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-gray-800">
          Rasuljon.
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-800"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (Mobile) */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-md rounded-md">
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>

            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Link to="/collections" onClick={toggleMenu}>
                Collections
              </Link>
            </li>
            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Link to="/register" onClick={toggleMenu}>
                Register
              </Link>
            </li>
          </ul>
        )}

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-gray-700 hover:text-gray-900 font-medium">
            <Link to="/">Home</Link>
          </li>

          <li className="text-gray-700 hover:text-gray-900 font-medium">
            <Link to="/collections">Collections</Link>
          </li>
          <li className="text-gray-700 hover:text-gray-900 font-medium">
            <Link to="/register">Register</Link>
          </li>
        </ul>

        {/*  Account */}
        <div className="flex items-center space-x-4">
          <Link to={"/profile"}>
            <button className="text-gray-600 hover:text-gray-800">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
