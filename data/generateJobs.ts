import fs from "fs";
import path from "path";
import jobFactory from "../factories/jobFactory";

console.log("Generating");
const jobsFakeResponse = new Array(25).fill(null).map(() => jobFactory());
fs.writeFileSync(path.resolve(__dirname, "./jobs.json"), JSON.stringify(jobsFakeResponse));
console.log("Done");
