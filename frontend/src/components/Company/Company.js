import ResponsiveAppBarCompany from "../NavbarCompany";
import DashboardLooker from "./DashboardLooker";
import SidebarCompany from "./DrawerCompany";

const Company = () => {
  return (
    <div>
      <ResponsiveAppBarCompany />
      <div className="flexCompany">
        <SidebarCompany />
        <div className="flexRight">
          <div className="muiCharts">
            {/* <LineChart/> */}
            Line Test
          </div>
          <div className="lookerDash">
            <DashboardLooker/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
