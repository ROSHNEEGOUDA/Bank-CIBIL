import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faBook, faTrophy, faFileAlt, faUsers, faFileClipboard } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/add-new", icon: faTasks, label: "Add New Record" },
    { to: "/existing", icon: faBook, label: "Existing Record" },
    // { to: "/leaderboard", icon: faTrophy, label: "Leaderboard" },
    // { to: "/report", icon: faFileClipboard, label: "Report" },
    // { to: "/community", icon: faUsers, label: "Community" },
  ];

  return (
    <div className="min-h-screen w-64 flex flex-col py-6 z-10 bg-white">
      <nav className="flex-grow">
        <ul className="space-y-4">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex items-center px-6 py-2 transition duration-200 text-black text-medium font-medium ${location.pathname.startsWith(to) ? "bg-blue-700 rounded-xl mx-6 text-white shadow-lg scale-105" : "hover:bg-blue-700 hover:rounded-xl hover:mx-6 hover:text-white hover:shadow-lg hover:scale-105"}`}
              >
                <div className="bg-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon={icon} className='text-white' />
                </div>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
