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

const Apopulation = ({ data }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 1000, textAlign: { xs: "center", md: "justify" } }}
      >
        Población por estado
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
            <YAxis domain={[0, 20000000]} />
            <Tooltip />
            <Legend />

            <Bar dataKey="pob" fill="#e0a37b" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Apopulation;
