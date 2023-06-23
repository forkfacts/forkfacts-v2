import { Button } from "konsta/react";
import NetWorkWrapper from "../components/NetworkStatus/NetWorkWrapper";
import React, { useState } from "react";

const OfflinePage = () => {
  const [retryCount, setRetryCount] = useState(0);

  const handleRetry = () => {
    setRetryCount(retryCount + 1);
    window.location.reload();
  };

  return (
    <NetWorkWrapper>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="text-center">
          <h1 className="text-main font-500 prose-titleLarge">You are offline</h1>
          <p className="w-[296px] text-center prose-titleMedium font-400 text-main mt-5 mb-6">
            You are currently offline. Please check your internet connection.
          </p>
          {retryCount < 3 && <Button onClick={handleRetry}>Try again</Button>}
        </div>
      </div>
    </NetWorkWrapper>
  );
};

export default OfflinePage;
