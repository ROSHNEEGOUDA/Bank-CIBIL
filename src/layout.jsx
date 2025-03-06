import React from "react";
import Navbar from "./navbar";
import Sidebar from "./SIdeBar";
import SidebarMobile from "./SidebarMobile";
import { useMediaQuery } from 'react-responsive';
import Background from "./Background/Background";

const MainLayout = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({maxWidth: 769});
  const isMobile = useMediaQuery({maxWidth : 480})

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Background/>
        {!isTabletOrMobile && <Sidebar className="z-10" />}
        <main className={`flex-grow z-10 ${isMobile ? "p-4" : ""}`}>
          {children}
        </main>
      </div>
      {isTabletOrMobile && <SidebarMobile className="z-10" />}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
