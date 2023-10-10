import ResponsiveAppBarCompany from "../NavbarCompany";
import SidebarCompany from "./DrawerCompany";

const Company = () => {
  return (
    <div>
      <ResponsiveAppBarCompany />
      <div className="flex">
        <SidebarCompany />
        <h1>This is company's main screen</h1>
      </div>
    </div>
  );
};

export default Company;
