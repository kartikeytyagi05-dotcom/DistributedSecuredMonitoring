import { useState, useEffect } from "react";

function Cards() {

  const [stats, setStats] = useState({

    threats:1245,
    incidents:48,
    blocked:932

  });



  useEffect(()=>{

    const interval = setInterval(()=>{

      setStats((prev)=>({

        threats: prev.threats + Math.floor(Math.random()*5),

        incidents: prev.incidents + Math.floor(Math.random()*2),

        blocked: prev.blocked + Math.floor(Math.random()*4)

      }));

    },3000);


    return ()=> clearInterval(interval);

  },[]);




  return (

    <div className="cards">

      <div className="card">

        <h2>{stats.threats}</h2>

        <p>Total Threats</p>

      </div>



      <div className="card">

        <h2>{stats.incidents}</h2>

        <p>Active Incidents</p>

      </div>



      <div className="card">

        <h2>{stats.blocked}</h2>

        <p>Blocked Attacks</p>

      </div>

    </div>

  );
}

export default Cards;