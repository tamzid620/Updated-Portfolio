"use client";
import Sidebar from "../Components/UserShared/Sidebar/Sidebar";
import HomeLoading from "../config/HomeLoading/HomeLoading";
import "../globals.css";
import { useEffect, useState } from "react";


const ClientWrapper = ({ children }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">

      <body>
        {loading ? (
          <HomeLoading />
        ) : (
          <div className="md:flex sm:inline">
            <div className="md:fixed sm: static top-0 left-0 h-screen"><Sidebar /></div>
            <div className="lg:ml-[550px] md:ml-[400px] sm: ml-0 w-full h-screen overflow-y-scroll scroll-smooth">
              {children}
            </div>
          </div>
        )}
      </body>
    </html>
  );
}


export default ClientWrapper;
