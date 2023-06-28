import React from "react";
import { getAgeRangesForLifeStage, getPercentDaily, spaceToDashes } from "./utils";
// import { render } from "@testing-library/react";
import { RdiAge } from "../../models";

describe("Utils Testing", () => {
  test("Displays the correct title", () => {
    const getRDI = getPercentDaily(23.444);
    const getPagePath = spaceToDashes("humus commercial");
    expect(getRDI).toBe(23);
    expect(getPagePath).toEqual("humus-commercial");
  });
  test("Get selected age by gender", () => {
    const ageRange: RdiAge[] = getAgeRangesForLifeStage("Infants");
    expect(Array.isArray(ageRange)).toBe(true);
    ageRange.forEach((age) => {
      expect(age.start).toBeGreaterThanOrEqual(0);
      expect(age.ageUnit).toMatch(/Month|Year/);
    });
  });
});
