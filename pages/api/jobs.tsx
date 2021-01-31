// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import jobFactory from "factories/jobFactory";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const jobsFakeResponse = new Array(50).fill(null).map(() => jobFactory());
  fs.writeFileSync(path.resolve(__dirname, "../../"));
  res.status(200).json(jobsFakeResponse);
};
