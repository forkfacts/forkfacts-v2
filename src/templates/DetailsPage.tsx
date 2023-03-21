import React, { useEffect, useState } from "react";
import { graphql, PageProps } from "gatsby";
import { DetailsPageScreen } from "@forkfacts/screens";
import { SEO } from "@forkfacts/components";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import SmokingRoomsOutlinedIcon from "@mui/icons-material/SmokingRoomsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import {
  DetailsPageTitlesItem,
  ageItem,
  compareTableItem,
  filterItem,
  lifeStageItem,
  SearchNutritionFilterItem,
  sidebarItem,
  NutritionTableItem,
} from "@forkfacts/models";
import { generateRdiForFood } from "@forkfacts/helpers";
import { Box } from "@mui/material";

const sidebarItems: sidebarItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook" },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon, link: "/grocery-list" },
];

const tabItems = [
  { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Emissions", Icon: SmokingRoomsOutlinedIcon, link: "/library" },
  { label: "Tips", Icon: TipsAndUpdatesOutlinedIcon, link: "/tips" },
  { label: "Compare foods", Icon: CompareArrowsOutlinedIcon, link: "/recipe" },
];

const DetailsPageTitlesItems: DetailsPageTitlesItem[] = [
  {
    title: "Banana, overripe, raw",
  },
  {
    title: "Banana, ripe and slightly ripe, raw",
  },
  {
    title: "Banana, raw",
  },
  {
    title: "Banana, raw",
  },
];

const compareTableItemRows: compareTableItem[] = [
  {
    foodName: "Beet greens",
    Calories: 19,
    "Beta carotene": 4,
    Vitamin: 30,
    Calcium: 119,
    Iron: 3,
  },
  {
    foodName: "Collards",
    Calories: 19,
    "Beta carotene": 2,
    Vitamin: 23,
    Calcium: 117,
    Iron: 0.6,
  },
  {
    foodName: "Dandelion greens",
    Calories: 45,
    "Beta carotene": 0,
    Vitamin: 35,
    Calcium: 187,
    Iron: 3,
  },
  {
    foodName: "Kale",
    Calories: 50,
    "Beta carotene": 5,
    Vitamin: 120,
    Calcium: 135,
    Iron: 2,
  },
  {
    foodName: "Mustard greens",
    Calories: 26,
    "Beta carotene": 3,
    Vitamin: 70,
    Calcium: 103,
    Iron: 1,
  },
  {
    foodName: "Swiss chard",
    Calories: 19,
    "Beta carotene": 2,
    Vitamin: 30,
    Calcium: 51,
    Iron: 2,
  },
  {
    foodName: "Tumip greens",
    Calories: 27,
    "Beta carotene": 6,
    Vitamin: 60,
    Calcium: 190,
    Iron: 1,
  },
];
const values: filterItem[] = [
  {
    name: "Beta Carotene (mg)",
  },
  {
    name: "Collards",
  },
  {
    name: "Dandelion greens",
  },
  {
    name: "Kale",
  },
  {
    name: "Mustard greens",
  },
  {
    name: "Swiss chard",
  },
  {
    name: "Tumip greens",
  },
];

const nutritionSummaryItems = [
  { name: "CALORIES", percentage: 20, weight: "450g" },
  { name: "CARBS", percentage: 20, weight: "120g" },
  { name: "PROTEINS", percentage: 20, weight: "50g" },
  { name: "FATS", percentage: 20, weight: "112g" },
  { name: "SUGARS", percentage: 20, weight: "9g" },
];

const units = ["Plates", "Cups", "Teaspoon"];

const lifeStageItems: lifeStageItem[] = [
  {
    name: "Children",
    icon: Kids,
  },
  {
    name: "Infants",
    icon: Baby,
  },
  {
    name: "females",
    icon: Woman,
  },
  {
    name: "males",
    icon: Male,
  },
  {
    name: "Pregnant",
    icon: PregnantWoman,
  },
  {
    name: "Lactation",
    icon: Lactation,
  },
];

const ageItems: ageItem[] = [
  {
    start: 9,
    end: 13,
    unit: "years",
  },
  {
    start: 14,
    end: 18,
    unit: "years",
  },
  {
    start: 19,
    end: 30,
    unit: "years",
  },
  {
    start: 31,
    end: 50,
    unit: "years",
  },
  {
    start: 51,
    end: 70,
    unit: "years",
  },
  {
    end: 70,
    unit: "years",
  },
];
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
  const { food, rdis, seo } = pageContext as any;
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
    console.log(age);
    const nutrients = state.selectedNutrients.length < 1 ? food.nutrients : state.selectedNutrients;
    const nutrientsWithRdis = nutrients.map((nutrient: any, index: number) => {
      const nutrientWithRdi = nutrientRdis.filter(
        (nutrientRdi) =>
          nutrientRdi.nutrient.name === nutrient.name &&
          nutrientRdi.nutrient.unit === nutrient.unit &&
          age.start === nutrientRdi?.rdi?.ageStart &&
          age?.unit?.toLowerCase() === nutrientRdi?.rdi?.ageUnit &&
          gender.toLowerCase() === nutrientRdi?.rdi?.applicableFor
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
          value: nutrientWithRdi?.rdi?.amount,
          weight: nutrientWithRdi?.rdi?.nutrientUnit,
        },
      };
      return factTableRow;
    });
    setRows(nutrientsWithRdis);
  }, [state.selectedAge, state.selectedGender, state.selectedNutrients]);

  console.log(nutrientRdis);

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
        DetailsPageTitlesItems={DetailsPageTitlesItems}
        detailsHeaderValues={{
          name: food.name,
          category: food.category,
        }}
        tabItems={tabItems}
        compareTableItems={compareTableItemRows}
        compareTableDetails={{
          name: "Comparing Greens",
          quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
        }}
        ageItems={ageItems}
        lifeStageItems={lifeStageItems}
        nutritionFilterItems={dataNutrients}
        nutritionSummaryItems={nutritionSummaryItems}
        measurementFilterItems={["Metric", "US"]}
        nutritionTableItems={rows}
        units={units}
        values={values}
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
