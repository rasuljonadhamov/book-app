import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">
      <Link to="/">Collection Management</Link>
    </h1>
    <nav>
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/collections" className="mr-4">
        Collections
      </Link>
      <Link to="/profile" className="mr-4">
        Profile
      </Link>
      <Link to="/admin" className="mr-4">
        Admin
      </Link>
    </nav>
  </header>
);

export default Header;
