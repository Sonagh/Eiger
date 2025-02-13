import {Link, useLocation} from 'react-router-dom';

const BottomNavbar = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white shadow-md rounded mx-4 mb-6 mt-3 py-2">
      <nav className="flex justify-around py-1">
        <Link
          to="/"
          className={`flex flex-col items-center hover:text-primary transition-colors duration-200 ${location.pathname === "/" && "text-primary"}`}
        >
          <i className="icon-home block text-lg mb-1" /> Home
        </Link>
        <Link
          to="/messages"
          className={`flex flex-col items-center hover:text-primary transition-colors duration-200 ${location.pathname === "/messages" && "text-primary"}`}
        >
          <i className="icon-messages block text-lg mb-1" /> Messages
        </Link>
        <Link
          to="/help"
          className={`flex flex-col items-center hover:text-primary transition-colors duration-200 ${location.pathname === "/help" && "text-primary"}`}
        >
          <i className="icon-help block text-lg mb-1" /> Help
        </Link>
      </nav>
    </div>
  );
};

export default BottomNavbar;
