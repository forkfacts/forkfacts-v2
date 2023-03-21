import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import { DetailsPageScreen } from "@forkfacts/screens";
import { SEO } from "@forkfacts/components";
import rdis from "../data/rdi.json";
import { ageItem, SearchNutritionFilterItem } from "@forkfacts/models";
import { generateRdiForFood } from "@forkfacts/helpers";
import { Box } from "@mui/material";
import {
  ageItems,
  lifeStageItems,
  nutritionSummaryItems,
  sidebarItems,
  tabItems,
} from "../RealData/realData";

interface NutriTable {
  nutrient: {
    amount: number;
    name: string;
    unit: string;
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
  const { food, seo } = pageContext as any;
  const [rows, setRows] = useState<any[]>([]);
  const [_, setSelectedNutrients] = useState<string[]>([]);
  const [selectLifeStage, setSelectedLifeStage] = useState("");
  const [selectAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectSearchNutrition, setSelectedSearchNutrition] = useState(
    [] as SearchNutritionFilterItem[]
  );
  const [unit, setUnit] = React.useState("Cups");
  const [state, setState] = useState<{
    selectedGender: string;
    selectedAge: ageItem;
    selectedNutrients: any[];
  }>({
    selectedGender: selectLifeStage,
    selectedAge: selectAge,
    selectedNutrients: [],
  });

  useEffect(() => {
    setState({
      selectedGender: selectLifeStage,
      selectedAge: selectAge,
      selectedNutrients: selectSearchNutrition,
    });
  }, [selectAge, selectLifeStage, selectSearchNutrition]);
  const thisFood = food as any;
  const allRdis = rdis as any[];

  const nutrientRdis: NutriTable[] = generateRdiForFood(thisFood, allRdis);
  useEffect(() => {
    const gender = state.selectedGender;
    const age = state.selectedAge;
    const nutrients = state.selectedNutrients.length < 1 ? food.nutrients : state.selectedNutrients;
    const nutrientsWithRdis = nutrients.map((nutrient: any, index: number) => {
      const nutrientWithRdi = nutrientRdis.filter(
        (nutrientRdi) =>
          nutrientRdi.nutrient.name === nutrient.name &&
          nutrientRdi.nutrient.unit === nutrient.unit &&
          age.start === nutrientRdi?.rdi?.ageStart &&
          age.end === nutrientRdi?.rdi?.ageEnd &&
          age?.unit?.toLowerCase() === nutrientRdi?.rdi?.ageUnit &&
          gender.toLowerCase() === nutrientRdi?.rdi?.applicableFor.toLowerCase()
      )[0];
      const getValueRounded = (amount: number) => {
        return Math.round(amount * 100) / 100;
      };
      const factTableRow: any = {
        index: index,
        nutrient: nutrient.name,
        amount: nutrient.amount,
        amountUnit: nutrient.unit.toLowerCase(),
        dailyValue: nutrientWithRdi?.percentDaily
          ? getValueRounded(Number(nutrientWithRdi?.percentDaily))
          : undefined,
        rdi: {
          value: nutrientWithRdi?.rdi?.amount ? Math.abs(nutrientWithRdi?.rdi?.amount) : undefined,
          weight: nutrientWithRdi?.rdi?.nutrientUnit,
        },
      };
      return factTableRow;
    });
    setRows(nutrientsWithRdis);
  }, [state.selectedAge, state.selectedGender, state.selectedNutrients]);

  const dataNutrients = food.nutrients.map(
    (item: { checked: boolean; name: string; unit: string }) => {
      return {
        checked: false,
        name: item.name,
        unit: item.unit,
      };
    }
  );

  return (
    <Box sx={{ p: "8px" }}>
      <DetailsPageScreen
        sidebarItems={sidebarItems}
        DetailsPageTitlesItems={[]}
        detailsHeaderValues={{
          name: food.name,
          category: food.category,
        }}
        tabItems={tabItems}
        compareTableItems={[]}
        compareTableDetails={{
          name: "Comparing Greens",
          quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
        }}
        ageItems={ageItems}
        lifeStageItems={lifeStageItems}
        nutritionFilterItems={dataNutrients}
        nutritionSummaryItems={nutritionSummaryItems}
        measurementFilterItems={[]}
        nutritionTableItems={rows}
        units={[]}
        values={[]}
        getSelectedNutrients={setSelectedNutrients}
        onSelectLifeStageItem={setSelectedLifeStage}
        onSelectAgeItem={setSelectedAge}
        onSelectNutritionFilterItem={setSelectedSearchNutrition}
        onSelectUnit={setUnit}
        onSelectMeasurementItem={function (item: string): void {
          throw new Error("Function not implemented.");
        }}
        onSelectFilterPageData={function (value: any): void {
          throw new Error("Function not implemented.");
        }}
        multipleSelectItems={[]}
        onSelectFilterItems={function (item: string[]): void {
          throw new Error("Function not implemented.");
        }}
        onSelectedValue={function (value: React.SetStateAction<string[]>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Box>
  );
};

export const Head = () => <SEO title="DetailPage" />;

export default DynamicPageTemplate;
