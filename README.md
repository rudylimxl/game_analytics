# Retail Analytics Data Sharing Example
This example illustrates a retail company building a data-sharing hub using Google Cloud technology, mainly BigQuery Analytics Hub + Looker 

Analytics Hub is a data exchange platform that enables you to share data and insights at scale across organizational boundaries with a robust security. Here, the retail company creates a data 'supermarket', a collaborative data sharing space where users (internal and external) can explore and subscribe/use datasets. Like a supermarket, data consumers are free to leave ratings, reviews, comments, etc. Built using BigQuery Analytics Hub API.
![2024-01-08_13-49-17](https://github.com/rudylimxl/game_analytics/assets/103036639/4cf099ae-9fc8-4797-9984-d3c9b2d9444f)


Beyond sharing data, the retail company provides embedded analytics and insight by utilizing GCP’s data modeling capability to provide standardized, universal data layer for all data applications, as well as directly embedding dashboards. Built using Looker API.
![2024-01-08_14-10-40](https://github.com/rudylimxl/game_analytics/assets/103036639/6a16df57-2360-4083-ae07-fc3b1c89e249)


# Configuration
**1. backend folder**
This is a backend express server that interacts with BigQuery and Analytics Hub.
First, please create a .env file in root directory of backend folder with two variables:

projectID = *your BigQuery projectID*
parent = *path of your analytics hub exchange. For example, mine is 'projects/624018808789/locations/asia-southeast1/dataExchanges/rudy_analytics_hub_demo_18b1197598c'. You can get extract this path from URL you used in GCP web console to access your analytics hub exchange*

These two variables are required to obtain the right listings to be displayed in data 'supermarket'
Second, please create a json file containing gcp service account key in root directory of backend folder. name it "gcp-service-acc.json"

**2. looker_backend folder**
This is another backend express server that interacts with a Looker instance for embedded analytics.
Please create a .env file in root directory of looker-backend folder with two variables:
HOST = *your Looker instance address, without the https://*
LOOKER_EMBED_SECRET = *embed secret obtained from Admin page. Details here:https://cloud.google.com/looker/docs/admin-panel-platform-embed#embed_secret*

**3. frontend folder**
This is the front-end React application.
For looker embedding, config can be done in src>components>Company>DashboardLooker.js file.
For example, which target dashboard to be embedded.

