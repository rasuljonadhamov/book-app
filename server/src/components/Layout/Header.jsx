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
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container no-underline text-white mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold no-underline text-white">
          Your App Name
        </Link>
        <nav>
          <ul className="flex space-x-4 no-underline text-white">
            <li>
              <Link className="no-underline text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="no-underline text-white" to="/collections">
                Collections
              </Link>
            </li>
            {/* Add more navigation links as needed */}
            <li>
              <Link className="no-underline text-white" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="no-underline text-white" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
