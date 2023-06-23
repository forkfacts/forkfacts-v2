import React, { useEffect, useState } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function NetWorkWrapper({ children }: Props) {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
      console.log(">>>> user is online");
    };

    const handleOffline = () => {
      setOnline(false);
      console.log(">>>> user is offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <div>{children}</div>;
}
