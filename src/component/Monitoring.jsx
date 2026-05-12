import { useEffect, useState } from "react";

function Monitoring() {

  const [attacks, setAttacks] = useState([]);

  const countries = [
    "India",
    "Russia",
    "China",
    "Germany",
    "USA",
    "Brazil",
    "UK",
    "Japan"
  ];

  const attackTypes = [
    "DDoS Attack",
    "SQL Injection",
    "Brute Force",
    "Malware Activity",
    "Phishing Attempt",
    "Unauthorized Access"
  ];


  useEffect(() => {

    const interval = setInterval(() => {

      const newAttack = {

        id: Date.now(),

        country:
          countries[Math.floor(Math.random() * countries.length)],

        type:
          attackTypes[Math.floor(Math.random() * attackTypes.length)],

        time: new Date().toLocaleTimeString()

      };

      setAttacks((prev) => [newAttack, ...prev.slice(0, 5)]);

    }, 2500);

    return () => clearInterval(interval);

  }, []);




  return (

    <div className="monitoring-grid">

      {/* LEFT PANEL */}

      <div className="world-map">

        <div className="map-header">

          <h2>Global Threat Monitoring</h2>

          <div className="live-status">
            LIVE
          </div>

        </div>


        <div className="map-box">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World Map"
            className="world-image"
          />

          <div className="map-overlay">

            <div className="attack-point india"></div>

            <div className="attack-point usa"></div>

            <div className="attack-point russia"></div>

            <div className="attack-point china"></div>

          </div>

        </div>

      </div>



      {/* RIGHT PANEL */}

      <div className="alerts-panel">

        <div className="map-header">

          <h2>Live Attack Feed</h2>

        </div>


        <div className="attack-feed">

          {

            attacks.map((attack) => (

              <div
                key={attack.id}
                className="attack-card"
              >

                <div className="attack-top">

                  <h4>{attack.type}</h4>

                  <span>{attack.time}</span>

                </div>

                <p>
                  Source Node : {attack.country}
                </p>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );
}

export default Monitoring;