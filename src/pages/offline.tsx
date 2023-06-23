import React, { useState, useEffect } from "react";
import { RiWifiOffLine } from "react-icons/ri";
import { Button } from "konsta/react";
import { navigate } from "gatsby";

const OfflinePage = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsOnline(window.navigator.onLine);

      const handleConnectionChange = () => {
        setIsOnline(window.navigator.onLine);
      };

      window.addEventListener("online", handleConnectionChange);
      window.addEventListener("offline", handleConnectionChange);

      return () => {
        window.removeEventListener("online", handleConnectionChange);
        window.removeEventListener("offline", handleConnectionChange);
      };
    }
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  if (isOnline) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <RiWifiOffLine className="w-12 h-12 text-primary-40 mb-4" />
        <h1 className="text-textDark font-500 text-[16px]">You are offline</h1>
        <p className="w-64 text-center text-dark mt-2 mb-6 font-400">
          You are currently offline. Please check your internet connection.
        </p>
        <Button onClick={handleRetry}>Try again</Button>
      </div>
    </div>
  );
};

export default OfflinePage;
