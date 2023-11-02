import { BigQuery } from "@google-cloud/bigquery";
import userSchema from "../models/userSchema.js";

const authOptions = {
  keyFilename: "../backend/gcp-service-acc.json",
  projectID: "interviewdemo-359821",
};

const bigquery = new BigQuery(authOptions);

/// insert rows to BQ
const options = {
  schema: userSchema,
};

const writeUser = async (
  username,
  email,
  age,
  gender,
  location
) => {
  const rows = [
    {
      username: username,
      email: email,
      age: age,
      gender: gender,
      location: location,
    },
  ];
  await bigquery.dataset("GASEIF14").table("User").insert(rows);
  console.log(`Inserted ${rows.length} rows to ${bigquery.baseUrl}`);
  return rows.length;
};

export default writeUser;
