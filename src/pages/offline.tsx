import NetWorkWrapper from "../components/NetworkStatus/NetWorkWrapper";
import React from "react";

const OfflinePage = () => (
  <NetWorkWrapper>
    <div className="flex justify-center items-center h-[100vh]">
      <div className="text-center">
        <h1 className="text-main font-500 prose-titleLarge">Offline</h1>
        <p className="w-[296px] text-center prose-titleMedium font-400 text-main mt-5">
          You are currently offline. Please check your internet connection.
        </p>
      </div>
    </div>
  </NetWorkWrapper>
);

export default OfflinePage;
