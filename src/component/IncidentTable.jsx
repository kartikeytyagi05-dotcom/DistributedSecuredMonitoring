import { useState, useEffect } from "react";

function IncidentTable() {

  const [incidents, setIncidents] = useState([

    {
      id:"#1021",
      threat:"Ransomware",
      source:"192.168.1.45",
      status:"Blocked",
      severity:"Critical"
    },

    {
      id:"#1022",
      threat:"DDoS Attack",
      source:"Russia Node",
      status:"Investigating",
      severity:"High"
    }

  ]);



  useEffect(()=>{

    const fakeIncidents = [

      {
        id:"#1023",
        threat:"Brute Force",
        source:"Unknown IP",
        status:"Active",
        severity:"Medium"
      },

      {
        id:"#1024",
        threat:"Phishing Attempt",
        source:"Email Gateway",
        status:"Resolved",
        severity:"Low"
      },

      {
        id:"#1025",
        threat:"Suspicious Login",
        source:"Admin Panel",
        status:"Investigating",
        severity:"High"
      }

    ];


    let index = 0;

    const interval = setInterval(()=>{

      if(index < fakeIncidents.length){

        setIncidents((prev)=>[
          ...prev,
          fakeIncidents[index]
        ]);

        index++;

      }

    },4000);


    return ()=> clearInterval(interval);

  },[]);




  return (

    <div className="incident-section">

      <h2>Incident Response Logs</h2>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Threat</th>
            <th>Source</th>
            <th>Status</th>
            <th>Severity</th>
          </tr>

        </thead>


        <tbody>

          {

            incidents.map((incident,index)=>(

              <tr key={index}>

                <td>{incident.id}</td>

                <td>{incident.threat}</td>

                <td>{incident.source}</td>

                <td
                  className={`status-${incident.status.toLowerCase()}`}
                >

                  {incident.status}

                </td>

                <td
                  className={`${incident.severity.toLowerCase()}-text`}
                >

                  {incident.severity}

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );
}

export default IncidentTable;