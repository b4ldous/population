import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BpopulationMaleFemale = ({ data }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          marginTop: "100px",
          fontWeight: 1000,
          textAlign: { xs: "center", md: "justify" },
        }}
      >
        Población: Hombres y Mujeres
      </Typography>

      <Box sx={{ marginTop: "100px" }}>
        <ResponsiveContainer height={400}>
          <BarChart
            margin={{
              top: 5,
              right: 50,
              left: 20,
              bottom: 5,
            }}
            data={data.datos}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nom_agee" />
            <YAxis domain={[0, 10000000]} />
            <Tooltip />
            <Legend />

            <Bar dataKey="pob_fem" fill="#e07bd9" />
            <Bar dataKey="pob_mas" fill="#7b82e0" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default BpopulationMaleFemale;
