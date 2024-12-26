import React from "react";
import { Card,CardContent,Box,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Cause = () => {
  const demoData = 
    {
      "vahicle Emissions" :
        "Cars,trucks, and buses release carbon monoxide, nitrogen oxides and hydrocarbons.",
      "industrial Processes":
        "Factories emit suffers dioxide, particulate matter, and voiatile organic components",
      "buring Fossil Fuals":
        "Coals, oil, and natural gas combustion produce greenhouse geses and particulates.",
      "deforestion":
        "The loss offorests reduces the natural filteration of carbon dioxide and pollutants.",
      "agricultural Activities":
        "Methane from livstock and ammonia from fertilizers contribute significantly.",

      "natural Causes":
        " Wildfirs, volcanic enuptions, dust stroms also play a role",
    }

  return (
    <div>
      <Card>
        <CardContent sx={{ marginTop: 1 }}>
          <Typography sx={{ fontSize: "1.6rem", color: "#40a0e0" }}>
            Causes of Air Pollution
          </Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>
            Air pollution stems from a variety of human activities and naturals
            events, Key causes include:
          </Typography>
          {Object.entries(demoData).map(([key, value]) => (
       
          <div style={{
            display: "flex", alignItems:"center"
          }}>
            <Typography style={{ fontWeight: 'bold',marginRight:"5px", color:"black" }}>
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

export default Cause;
