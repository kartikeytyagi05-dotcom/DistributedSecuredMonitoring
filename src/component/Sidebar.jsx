function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="logo">
        <h2>DS-MIRS</h2>
        <p>Secure Monitoring System</p>
      </div>

      <ul className="nav-links">

        <li className="active">
          Dashboard
        </li>

        <li>
          Threat Analysis
        </li>

        <li>
          Network Monitoring
        </li>

        <li>
          Incident Logs
        </li>

        <li>
          Settings
        </li>

      </ul>

    </aside>

  );
}

export default Sidebar;