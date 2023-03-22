import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import { DetailsPageScreen } from "@forkfacts/screens";
import { SEO } from "@forkfacts/components";
import rdis from "../../data/rdi.json";
import { ageItem } from "@forkfacts/models";

import { generateRdiForFood, getAgeRangesForLifeStage } from "@forkfacts/helpers";
import { Box } from "@mui/material";
import {
  allAges,
  lifeStageItems,
  nutritionSummaryItems,
  sidebarItems,
  tabItems,
} from "../RealData/realData";
import { useStore } from "../store/store";
import WrapRootElement from "../libs/wrapRootElement";

interface NutriTable {
  nutrient: {
    amount: number;
    name: string;
    unit: string;
    displayName: string;
    nutrientGroup: string;
  };
  percentDaily: string;
  rdi: {
    ageStart: number;
    ageEnd: number;
    ageUnit: string;
    amount: number;
    nutrient: string;
    nutrientUnit: string;
    applicableFor: string;
  };
}

const DynamicPageTemplate = ({ pageContext }: PageProps) => {
  const { food } = pageContext as any;
  const [rows, setRows] = useState<any[]>([]);
  const { gender, age, nutrients, setAge } = useStore((state) => state);
  const [_, setUnit] = React.useState("Cups");
  const [state, setState] = useState<{
    selectedGender: string;
    selectedAge: ageItem;
    selectedNutrients: any[];
  }>({
    selectedGender: gender,
    selectedAge: allAges.filter((age) => age.start === 31)[0],
    selectedNutrients: [],
  });

  useEffect(() => {
    setState({
      selectedGender: gender,
      selectedAge: age,
      selectedNutrients: nutrients,
    });
  }, [gender, age, nutrients]);
  const thisFood = food as any;
  const allRdis = rdis as any[];

  const nutrientRdis: NutriTable[] = generateRdiForFood(thisFood, allRdis);
  useEffect(() => {
    const gender = state.selectedGender;
    const age = state.selectedAge;
    const nutrients = !state.selectedNutrients.length ? food.nutrients : state.selectedNutrients;

    if (state.selectedNutrients.length && state.selectedAge && state.selectedNutrients) {
    }

    const nutrientsWithRdis = nutrients.map((nutrient: any, index: number) => {
      // const factTableRow: any = {
      //   index: index,
      //   nutrient: nutrient.name,
      //   amount: nutrient?.amount,
      //   amountUnit: nutrient?.unit?.toLowerCase(),
      //   dailyValue: nutrientWithRdi?.percentDaily
      //     ? getValueRounded(Number(nutrientWithRdi?.percentDaily))
      //     : undefined,
      //   rdi: {
      //     value: nutrientWithRdi?.rdi?.amount ? Math.abs(nutrientWithRdi?.rdi?.amount) : undefined,
      //     weight: nutrientWithRdi?.rdi?.nutrientUnit,
      //   },
      // };
      // return factTableRow;
      const filteredNutrient = nutrientRdis.filter((item) => {});
      return nutrient;
    });
    setRows(nutrientsWithRdis);
  }, [state.selectedAge, state.selectedGender, state.selectedNutrients]);

  useEffect(() => {
    const { selectedGender } = state;
    if (selectedGender === "Infants")
      setAge({
        start: 0,
        end: 6,
        ageUnit: "month",
      });
    else if (selectedGender === "Children")
      setAge({
        start: 1,
        end: 3,
        ageUnit: "year",
      });
    else if (selectedGender === "Males")
      setAge({
        start: 9,
        end: 13,
        ageUnit: "year",
      });
    else if (selectedGender === "Females")
      setAge({
        start: 31,
        end: 50,
        ageUnit: "year",
      });
    else if (selectedGender === "Pregnant" || selectedGender === "Lactation")
      setAge({
        start: 14,
        end: 18,
        ageUnit: "year",
      });
  }, [state.selectedGender]);

  const ageRanges = getAgeRangesForLifeStage(state.selectedGender);
  const dataNutrients = food.nutrients.map(
    (item: { checked: boolean; name: string; unit: string }) => {
      return {
        checked: false,
        name: item.name,
        unit: item.unit,
      };
    }
  );

  console.log(nutrientRdis);
  return (
    <WrapRootElement>
      <Box sx={{ p: "8px" }}>
        {/* <DetailsPageScreen
          sidebarItems={sidebarItems}
          DetailsPageTitlesItems={[]}
          detailsHeaderValues={{
            name: food.name,
            category: food.category,
          }}
          tabItems={tabItems}
          compareTableItems={[]}
          compareTableDetails={{
            name: "",
            quantityAmount: "",
          }}
          ageItems={ageRanges}
          lifeStageItems={lifeStageItems}
          nutritionFilterItems={dataNutrients}
          nutritionSummaryItems={nutritionSummaryItems}
          measurementFilterItems={[]}
          nutritionTableItems={rows}
          units={[]}
          values={[]}
          onSelectUnit={setUnit}
          onSelectMeasurementItem={function (item: string): void {
            throw new Error("Function not implemented.");
          }}
          multipleSelectItems={[]}
          onSelectedValue={function (value: React.SetStateAction<string[]>): void {
            throw new Error("Function not implemented.");
          }}
        /> */}
      </Box>
    </WrapRootElement>
  );
};

export const Head = () => <SEO title="DetailPage" />;

export default DynamicPageTemplate;
