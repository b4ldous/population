import React from "react";
import {
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CpopulationViv = ({ data }) => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          marginTop: "100px",
          fontWeight: 1000,
          textAlign: { xs: "center", md: "justify" },
        }}
      >
        Población y vivienda
      </Typography>
      <Box sx={{ marginTop: "100px" }}>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data.datos}
            margin={{ top: 10, right: 30, left: 50, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e0a37b" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#e0a37b" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ef974" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0ef974" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="nom_abrev" />
            <YAxis type="number" domain={[0, 20000000]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="pob"
              stroke="#e0a37b"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="viv"
              stroke="#0ef974"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

export default CpopulationViv;
