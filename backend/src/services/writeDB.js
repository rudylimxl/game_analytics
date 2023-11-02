import { BigQuery } from "@google-cloud/bigquery";
import playSchema from "../models/playSchema.js";

const authOptions = {
  keyFilename: "../backend/gcp-service-acc.json",
  projectID: "interviewdemo-359821",
};

const bigquery = new BigQuery(authOptions);

/// insert rows to BQ
const options = {
  schema: playSchema,
};

const bqDateTime = () => {
  return new Date();
};

const generateID = () => {
  const unixTime = Date.now();
  const uniqueID = unixTime * 100 + Math.floor(Math.random() * 100);
  return uniqueID;
};

const writePlay = async (
  user_id,
  moves_to_win,
  sequence,
  clear_sequence,
  complete,
  username
) => {
  const rows = [
    {
      play_id: generateID(),
      user_id: user_id,
      play_datetime: bqDateTime(),
      moves_to_win: moves_to_win,
      sequence: sequence,
      clear_sequence: clear_sequence,
      game_complete: complete,
      username: username
    },
  ];
  await bigquery.dataset("GASEIF14").table("Plays").insert(rows);
  console.log(`Inserted ${rows.length} rows to ${bigquery.baseUrl}`);
  return rows.length;
};

export default writePlay;
