import { MobileSearchBaseScreen } from "@forkfacts/components";
import { Box } from "@mui/system";
import React, { useState } from "react";

const SearchComponent: React.FC = () => {
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  return (
    <Box>
      <MobileSearchBaseScreen
        isSearchEmpty={isSearchEmpty}
        setIsSearchEmpty={setIsSearchEmpty}
        isHome={true}
      />
    </Box>
  );
};

export default SearchComponent;
