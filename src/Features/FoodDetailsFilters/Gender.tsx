import { Button } from "konsta/react";
import React from "react";
import { FaSortDown } from "react-icons/fa";

const Gender = () => {
  return (
    <Button outline className="flex w-[111px] items-center gap-2 text-dark px" small>
      <span>Children</span>
      <FaSortDown />
    </Button>
  );
};

export default Gender;
