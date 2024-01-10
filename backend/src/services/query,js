import { BigQuery } from "@google-cloud/bigquery";
import playSchema from "../models/playSchema.js";

const authOptions = {
  keyFilename: "../backend/gcp-service-acc.json",
  projectID: "interviewdemo-359821",
};

const bigquery = new BigQuery(authOptions);

async function query() {
const query = "SELECT CONCAT(u.gender,`-`, p.game_complete) as data, count(*) as count FROM `GASEIF14.Plays`p JOIN `GASEIF14.UserView` u ON p.username = u.username GROUP BY 1"

// For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
const options = {
query: query,
// Location must match that of the dataset(s) referenced in the query.
// location: 'US',
};

// Run the query as a job
const [job] = await bigquery.createQueryJob(options);
console.log(`Job ${job.id} started.`);

// Wait for the query to finish
const [rows] = await job.getQueryResults();

// Print the results
console.log('Rows:');
rows.forEach(row => console.log(row));
}

export default query;