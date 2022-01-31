import React, { useEffect, useState } from "react";
import Graph from "./Graph";


const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  // Fetching Data from Api
  useEffect(() => {
    const getCovidDetail = async () => {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise);
    };
    getCovidDetail();
  }, []);
  return (
    <div>
      <h1>Indian Covid-19 Data</h1>
      <div className="search">
        <label>Search :</label>
        <input
          type="text"
          placeholder="Enter the State Name.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <td>State</td>
              <td>Conformed</td>
              <td>Recovered</td>
              <td>Deaths</td>
              <td>Active</td>
              <td>Update</td>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((data, index) => {
                if (search === "") {
                  return data;
                } else if (
                  data.state.toLowerCase().includes(search.toLowerCase())
                ) {
                  return data;
                }
              })
              .map((current) => {
                return (
                  <tr key={current.state}>
                    <td>{current.state}</td>
                    <td>{current.confirmed}</td>
                    <td>{current.recovered}</td>
                    <td>{current.deaths}</td>
                    <td>{current.active}</td>
                    <td>{current.lastupdatedtime}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="graph">
      <Graph details={data}  />
      </div>
    </div>
  );
};

export default Table;
