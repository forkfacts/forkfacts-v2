import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import SmokingRoomsOutlinedIcon from "@mui/icons-material/SmokingRoomsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import { lifeStageItem, MenuItem, RdiAge } from "@forkfacts/models";

export const menuItems: MenuItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipes/" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library/" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook/" },
  { label: "Grocery", Icon: ShoppingCartOutlinedIcon, link: "/grocery/" },
  { label: "Tools", Icon: HomeRepairServiceOutlinedIcon, link: "/tools/" },
  { label: "Help", Icon: HelpOutlineOutlinedIcon, link: "/help/" },
];

export const tabItems = [
  { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Emissions", Icon: SmokingRoomsOutlinedIcon, link: "/library" },
  { label: "Tips", Icon: TipsAndUpdatesOutlinedIcon, link: "/tips" },
  { label: "Compare foods", Icon: CompareArrowsOutlinedIcon, link: "/recipe" },
];
export const nutritionSummaryItems = [
  { name: "CALORIES", percentage: 20, weight: "450g" },
  { name: "CARBS", percentage: 20, weight: "120g" },
  { name: "PROTEINS", percentage: 20, weight: "50g" },
  { name: "FATS", percentage: 20, weight: "112g" },
  { name: "SUGARS", percentage: 20, weight: "9g" },
];
export const lifeStageItems: lifeStageItem[] = [
  {
    name: "Children",
    icon: Kids,
  },
  {
    name: "Infants",
    icon: Baby,
  },
  {
    name: "Females",
    icon: Woman,
  },
  {
    name: "Males",
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

export const allAges: RdiAge[] = [
  { start: 0, end: 6, ageUnit: "month" },
  { start: 7, end: 12, ageUnit: "month" },
  { start: 1, end: 3, ageUnit: "year" },
  { start: 4, end: 8, ageUnit: "year" },
  { start: 9, end: 13, ageUnit: "year" },
  { start: 14, end: 18, ageUnit: "year" },
  { start: 19, end: 30, ageUnit: "year" },
  { start: 31, end: 50, ageUnit: "year" },
  { start: 51, end: 70, ageUnit: "year" },
  { start: 70, ageUnit: "year" },
];

export const navbarItems = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
];

export const categoryOptions = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: LibraryBooksOutlinedIcon },
];
