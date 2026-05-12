import "./styles/style.css";

import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import Cards from "./component/Cards";
import Monitoring from "./component/Monitoring";
import IncidentTable from "./component/IncidentTable";
import SystemHealth from "./component/SystemHealth";

function App() {

  return (

    <div className="container">

      <Sidebar />

      <div className="main-content">

        <Topbar />

        <Cards />

        <Monitoring />

        <IncidentTable />

        <SystemHealth />

      </div>

    </div>

  );
}

export default App;