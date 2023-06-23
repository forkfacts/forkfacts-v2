import React, { useState, useEffect } from "react";
import { RiWifiOffLine } from "react-icons/ri";
import { Button } from "konsta/react";
import { navigate } from "gatsby";

const isBrowser = typeof window !== "undefined";

const OfflinePage = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleConnectionChange = () => {
      if (isBrowser) {
        setIsOnline(window && window.navigator.onLine);
      }
    };
    if (isBrowser) {
      setIsOnline(window.navigator.onLine);
      window && window.addEventListener("online", handleConnectionChange);
      window && window.addEventListener("offline", handleConnectionChange);
    }

    return () => {
      if (isBrowser) {
        window && window.removeEventListener("online", handleConnectionChange);
        window && window.removeEventListener("offline", handleConnectionChange);
      }
    };
  }, []);

  const handleRetry = () => {
    if (isBrowser) {
      window && window.location.reload();
    }
  };

  if (isOnline) {
    navigate("/");
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
