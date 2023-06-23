import React, { useState, useEffect } from "react";
import { RiWifiOffLine } from "react-icons/ri";
import { Button } from "konsta/react";
import { navigate } from "gatsby";

const Offline = () => {
  const [isOnline, setIsOnline] = useState(
    typeof window !== "undefined" && window && navigator.onLine
  );

  useEffect(() => {
    if (isOnline) {
      navigate("/");
    }
  }, [isOnline]);

  useEffect(() => {
    const handleConnectionChange = () => {
      if (typeof window !== "undefined") {
        setIsOnline(navigator.onLine);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("online", handleConnectionChange);
      window.addEventListener("offline", handleConnectionChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("online", handleConnectionChange);
        window.removeEventListener("offline", handleConnectionChange);
      }
    };
  }, []);

  const handleRetry = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

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
