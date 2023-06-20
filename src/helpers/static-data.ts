import { Gender, RdiAge, Recommendation } from "@forkfacts/models";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "../designIcons";

export const recommendations: Recommendation[] = [
  {
    category: "SUPERFOODS",
    collections: [
      { name: "Blueberries" },
      { name: "Kale" },
      { name: "Quinoa" },
      { name: "Chia seeds" },
      { name: "Spinach" },
      { name: "Greek yogurt" },
      { name: "Almonds" },
      { name: "Turmeric" },
      { name: "Green tea" },
      { name: "Avocado" },
      { name: "Sweet potatoes" },
      { name: "Garlic" },
      { name: "Cacao" },
      { name: "Mushrooms" },
    ],
  },
  {
    category: "MAGNESIUM RICH FOODS",
    collections: [
      { name: "Spinach" },
      { name: "Almonds" },
      { name: "Cashews" },
      { name: "Pumpkin seeds" },
      { name: "Black beans" },
      { name: "Avocado" },
      { name: "Dark chocolate" },
      { name: "Tofu" },
      { name: "Yogurt" },
      { name: "Bananas" },
      { name: "Dark leafy greens" },
      { name: "Lentils" },
    ],
  },
  {
    category: "FIBER RICH FOODS",
    collections: [
      { name: "Chia Seeds" },
      { name: "Flaxseeds" },
      { name: "Quinoa" },
      { name: "Whole Grain Bread" },
      { name: "Avocado" },
      { name: "Brussels Sprouts" },
      { name: "Artichokes" },
      { name: "Sweet Potatoes" },
      { name: "Spinach" },
      { name: "Kale" },
      { name: "Almonds" },
    ],
  },
  {
    category: "ZINC RICH FOODS",
    collections: [
      { name: "Pumpkin Seeds" },
      { name: "Hemp Seeds" },
      { name: "Cashews" },
      { name: "Quinoa" },
      { name: "Sesame Seeds" },
      { name: "Yogurt" },
      { name: "Spinach" },
      { name: "Dark Chocolate" },
    ],
  },
];

export const genders: Gender[] = [
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
  { start: 0, end: 6, ageUnit: "Month" },
  { start: 7, end: 12, ageUnit: "Month" },
  { start: 1, end: 3, ageUnit: "Year" },
  { start: 4, end: 8, ageUnit: "Year" },
  { start: 9, end: 13, ageUnit: "Year" },
  { start: 14, end: 18, ageUnit: "Year" },
  { start: 19, end: 30, ageUnit: "Year" },
  { start: 31, end: 50, ageUnit: "Year" },
  { start: 51, end: 70, ageUnit: "Year" },
  { start: 70, ageUnit: "Year" },
];
