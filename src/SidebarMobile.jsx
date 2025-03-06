import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faBook, faTrophy, faFileAlt, faUsers, faFileClipboard } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const SidebarMobile = () => {
  const location = useLocation();
  const isSideMobile = useMediaQuery({ maxWidth: 340 });

  const navItems = [
    { to: "/homepage", icon: faTasks, label: "Add New Record" },
    { to: "/courses", icon: faBook, label: "Existing Record" },
    // { to: "/leaderboard", icon: faTrophy, label: "Leaderboard" },
    // { to: "/report", icon: faFileClipboard, label: "Report" },
    // { to: "/community", icon: faUsers, label: "Community" },
  ];

  const SideMobile1 = () => {
    return (
      <nav className="fixed bottom-0 w-full bg-white md:hidden shadow">
        <ul className="flex justify-around py-2">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex flex-col items-center transition duration-200 ${location.pathname.startsWith(to) ? "text-blue-700 scale-105" : "text-gray-400 hover:text-blue-700 hover:scale-105"
                  }`}
              >
                <FontAwesomeIcon icon={icon} className="text-2xl" />
                <span className="text-xs">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  // for width 340px  

  const SideMobile2 = () => {
    return (
      <nav className="fixed bottom-0 w-full bg-white md:hidden shadow">
        <ul className="flex justify-around py-2">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex flex-col items-center  transition duration-200 ${location.pathname.startsWith(to) ? "text-blue-700 scale-105" : "text-gray-400 hover:text-blue-700 hover:scale-105"
                  }`}
              >
                <FontAwesomeIcon icon={icon} className="text-sm" />
                <span className="text-[10px]">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <div>
      {isSideMobile ? <SideMobile2 /> : <SideMobile1 />}
    </div>
  );
};

export default SidebarMobile;
