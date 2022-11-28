import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Apopulation from "./charts/Apopulation";
import Box from "@mui/material/Box";
import BpopulationMaleFemale from "./charts/BpopulationMaleFemale";
import CpopulationViv from "./charts/CpopulationViv";

const DataFetchingEntryPoint = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://gaia.inegi.org.mx/wscatgeo/mgee/`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  console.log(data);

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

      <Box>
        <Apopulation data={data} />
        <BpopulationMaleFemale data={data} />
        <CpopulationViv data={data} />
      </Box>
    </>
  );
};

export default DataFetchingEntryPoint;
