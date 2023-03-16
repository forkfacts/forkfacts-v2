import { $ } from "zx";
import dotenv from "dotenv";

dotenv.config();

const files = [
  {
    name: "foundation_food_nutrition_facts.json",
  },
  { url: `rdi.json`, name: "rdi.json" },
  {
    name: "sr_legacy_food_nutrition_facts.json",
  },
  {
    name: "usda_rdi_nutrient_mapping.json",
  },
];
const download = async (url, toDir, fileName) => {
  return $`mkdir -p ${toDir} && wget ${url} -O "${toDir}/${fileName}"`;
};

async function downloadFiles() {
  try {
    dotenv;
    await $`cd src`;
    await $`mkdir -p src/data`;
    for (const file of files) {
      download(process.env.DATA_ENDPOINT, "src/data", file.name);
    }

    console.log("Downloaded successfully");
  } catch (error) {
    console.log(error);
  }
}

downloadFiles();
