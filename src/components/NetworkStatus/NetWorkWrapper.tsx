import { navigate } from "gatsby";
import React, { useEffect } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function NetWorkWrapper({ children }: Props) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window &&
        window.addEventListener("online", function (e) {
          navigate("/");
          console.log("online");
        });
    }
    return () => {
      if (typeof window !== "undefined") {
        window &&
          window.removeEventListener("online", function (e) {
            console.log("online");
            navigate("/");
          });
      }
    };
  }, []);

  return <div>{children}</div>;
}
