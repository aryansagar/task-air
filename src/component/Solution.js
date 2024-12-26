import React from "react";
import { Card,CardContent,Box,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Effect = () => {
  const demoData = 
    {
      "Transition to Renewable Energy" :
        "Use soler, wind and hydropower to replace fossil fuals.",
      "Promote Public Transportation":
        "Reducing vehicle use can cut down emissions significantly.",

      "Energy Effiency":
        "Using energy-effcient appliances and building lowers pollution.",

      "Reforestation":
        "Planting trees improves air quantity ans sequesters carbon dioxide",
      "Legislation" : "Govemments can enforce stricter emission limits and enviroments policies."
    }

  return (
    <div>
      <Card>
        <CardContent sx={{ marginTop: 1 }}>
          <Typography sx={{ fontSize: "1.6rem", color: "#40a0e0" }}>
            Solutions to Air Pollution
          </Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>
           Effect to combat air pollution involve reducing emissions and adopting sustainable practices. Some effective strategies include:
          </Typography>
          {Object.entries(demoData).map(([key, value]) => (
       
          <div style={{
            display: "flex", alignItems:"center"
          }}>
            <Typography style={{ fontWeight: 'bold',marginRight:"0.01rem", color:"black" }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </Typography>
            <Typography variant="body1" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {value}
            </Typography>
          </div>

        ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Effect;