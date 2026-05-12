function SystemHealth() {

  return (

    <div className="system-health">

      <div className="health-card">

        <h3>CPU Usage</h3>

        <div className="progress-bar">
          <div className="progress cpu"></div>
        </div>

        <p>68%</p>

      </div>


      <div className="health-card">

        <h3>Memory Usage</h3>

        <div className="progress-bar">
          <div className="progress memory"></div>
        </div>

        <p>74%</p>

      </div>


      <div className="health-card">

        <h3>Network Traffic</h3>

        <div className="progress-bar">
          <div className="progress network"></div>
        </div>

        <p>82%</p>

      </div>

    </div>

  );
}

export default SystemHealth;