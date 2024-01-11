import { AnalyticsHubServiceClient } from '@google-cloud/bigquery-data-exchange';
import "dotenv/config";

const authOptions = {
  keyFilename: "../backend/gcp-service-acc.json",
  projectID: process.env.projectID,
};

const bigquerydataexchange = new AnalyticsHubServiceClient(authOptions);
const parent = process.env.parent;

//get list of analytics hub listing
async function callListDataExchanges() {
    // Construct request
    const request = {
        parent,
    };
  
    // Run request
    const iterable = await bigquerydataexchange.listListingsAsync(request);
    const exchangelist = []
    for await (const response of iterable) {
    //   console.log(response);
      exchangelist.unshift(response);
      console.log(exchangelist)
    }
    return exchangelist;
  }

export default callListDataExchanges;

/// insert rows to BQ
// const options = {
//   schema: playSchema,
// };

// const bqDateTime = () => {
//   return new Date();
// };

// const generateID = () => {
//   const unixTime = Date.now();
//   const uniqueID = unixTime * 100 + Math.floor(Math.random() * 100);
//   return uniqueID;
// };

// const writePlay = async (
//   user_id,
//   moves_to_win,
//   sequence,
//   clear_sequence,
//   complete,
//   username
// ) => {
//   const rows = [
//     {
//       play_id: generateID(),
//       user_id: user_id,
//       play_datetime: bqDateTime(),
//       moves_to_win: moves_to_win,
//       sequence: sequence,
//       clear_sequence: clear_sequence,
//       game_complete: complete,
//       username: username
//     },
//   ];
//   await bigquery.dataset("GASEIF14").table("Plays").insert(rows);
//   console.log(`Inserted ${rows.length} rows to ${bigquery.baseUrl}`);
//   return rows.length;
// };


