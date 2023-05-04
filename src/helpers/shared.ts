import * as fs from "fs";

const ARTIFACT_PATH = ".raw";
export const writeJsonToFile = (fileName: string, jsonData: any[]) => {
  if (!fs.existsSync(ARTIFACT_PATH)) fs.mkdirSync(ARTIFACT_PATH);
  fs.writeFile(`${ARTIFACT_PATH}/${fileName}`, JSON.stringify(jsonData), (err: any) => {
    if (err) throw err;
    console.log(`Done writing to file ${fileName}`);
  });
};
