// import fs from "fs";

const ARTIFACT_PATH = ".raw";

/**
 * The purpose is to use `-` as separator in the URL naming scheme.
 * This is important for SEO purposes
 * Watch https://www.youtube.com/watch?v=AQcSFsQyct8 to learn more
 * @param name
 */
export const spaceToDashes = (name: string) => {
  const pathname = name
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-");
  return pathname.endsWith("-") ? pathname.substr(0, pathname.length - 1) : pathname;
};

// export const writeJsonToFile = (fileName: string, jsonData: Object[]) => {
//   if (!fs.existsSync(ARTIFACT_PATH)) fs.mkdirSync(ARTIFACT_PATH);
//   fs.writeFile(`${ARTIFACT_PATH}/${fileName}`, JSON.stringify(jsonData), (err) => {
//     if (err) throw err;
//     console.log(`Done writing to file ${fileName}`);
//   });
// };
