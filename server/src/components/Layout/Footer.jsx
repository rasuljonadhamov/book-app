import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex gap-4 justify-evenly mt-20">
      <p>&copy; 2024 Collection App</p>
      <ul className="flex gap-4">
        <li>
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>
        </li>
        <li>
          <Link
            to="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
        </li>
        <li>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
