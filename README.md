# Configuration
1. backend folder
This is a backend express server that interacts with BigQuery and Analytics Hub.
First, please create a .env file in root directory of backend folder with two variables:
projectID = *your BigQuery projectID*
parent = *path of your analytics hub exchange. For example, mine is 'projects/624018808789/locations/asia-southeast1/dataExchanges/rudy_analytics_hub_demo_18b1197598c'. You can get extract this path from URL you used in GCP web console to access your analytics hub exchange*
These two variables are required to obtain the right listings to be displayed in data 'supermarket'

Second, please create a json file containing gcp service account key in root directory of backend folder. name it "gcp-service-acc.json"

2. looker_backend folder
This is another backend express server that interacts with a Looker instance for embedded analytics.
Please create a .env file in root directory of looker-backend folder with two variables:
HOST = *your Looker instance address, without the https://*
LOOKER_EMBED_SECRET = *embed secret obtained from Admin page. Details here:https://cloud.google.com/looker/docs/admin-panel-platform-embed#embed_secret*

3. frontend folder
This is the front-end React application.
For looker embedding, config can be done in src>components>Company>DashboardLooker.js file.
For example, which target dashboard to be embedded.

