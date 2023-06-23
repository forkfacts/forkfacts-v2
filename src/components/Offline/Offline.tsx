import React, { useState, useEffect } from "react";
import { RiWifiOffLine } from "react-icons/ri";
import { Button } from "konsta/react";
import { navigate } from "gatsby";

const isBrowser = typeof window !== "undefined";

const Offline = () => {
  const [isOnline, setIsOnline] = useState(isBrowser && window && navigator.onLine);

  useEffect(() => {
    const handleConnectionChange = () => {
      if (isBrowser) {
        setIsOnline(navigator.onLine);
      }
    };

    if (isBrowser) {
      window.addEventListener("online", handleConnectionChange);
      window.addEventListener("offline", handleConnectionChange);
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener("online", handleConnectionChange);
        window.removeEventListener("offline", handleConnectionChange);
      }
    };
  }, []);

  const handleRetry = () => {
    if (isBrowser) {
      window.location.reload();
    }
  };

  if (isOnline) {
    navigate("/");
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <RiWifiOffLine className="w-12 h-12 text-primary-40 mb-4" />
        <h1 className="text-main font-semibold text-2xl">You are offline</h1>
        <p className="w-64 text-center text-main mt-5 mb-6">
          You are currently offline. Please check your internet connection.
        </p>
        <Button onClick={handleRetry}>Try again</Button>
      </div>
    </div>
  );
};

export default Offline;
