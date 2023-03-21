import { $ } from "zx";
import dotenv from "dotenv";

dotenv.config();

const files = [
  {
    name: "foundation_food_nutrition_facts.json",
  },
  {
    name: "sr_legacy_food_nutrition_facts.json",
  },
  {
    name: "usda_rdi_nutrient_mapping.json",
  },
  { name: "rdi.json" },
];

/**
 * Create the nested directories, if needed, and downloads the file from the server and use it to create file directory.
 * @param url
 * @param toDir
 * @param fileName
 */

const download = async (url, toDir, fileName) => {
  return $`curl --create-dirs --output "${toDir}/${fileName}" ${url}`;
};

async function downloadFiles() {
  try {
    await $`cd src`;
    await $`mkdir -p data`;
    for (const file of files) {
      const fileUrl = `${process.env.DATA_ENDPOINT}/${file.name}`;
      await download(fileUrl, "data", file.name);
    }
    console.log("Downloaded successfully");
  } catch (error) {
    console.log(error);
  }
}

downloadFiles();
