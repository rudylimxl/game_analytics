import ResponsiveAppBarCompany from "../NavbarCompany";
import DashboardLooker from "./DashboardLooker";
import SidebarCompany from "./DrawerCompany";
import DataHubTiles from "./DataHubTiles";
import Example from "./charts/Line";
import PieExample from "./charts/Pie";

const Company = () => {
  return (
    <div>
      <ResponsiveAppBarCompany />
      <div className="flexCompany">
        <SidebarCompany />
        <div className="flexRight">
          <div className="dataHub">
            <h2>DataHub</h2>
            <p>This segment illustrates building a data 'supermarket', a marketplace to discover data. Allow users to collaborate by leaving ratings, comments, reviews, and suggestions. Built using BigQuery Analytics Hub API.</p>
            <DataHubTiles/>
          </div>
          <div className="dataHub">
            <h2>Provide Insights, Beyond Raw Data</h2>
            <p>This segment illustrates building insights and analytics into your user's workflow. Developers are free to use their own visualization library (tapping on GCP's data modeling layer) or directly embed dashboards. Built using Looker API.</p>
          <div className="muiCharts">
            {/* <LineChart/> */}
            <Example/>
            <PieExample/>
          </div>
          <div className="lookerDash">
            <h5>Embedding Looker Dashboards</h5>
            <DashboardLooker/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
