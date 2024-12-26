import React from "react";
import { Card,CardContent,Box,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Effect = () => {
  const demoData = 
    {
      "Health Problems" :
        "Respiratory diseases, heart condition, and lung cancer are linked to prolonged exposure.",
      "Climate Change":
        "Greenhouse gases like carbon dioxide and methane contribute to global warming.",
      "Acid Rain":
        "Sulfur dioxide and nirrogen oxides react with water to create acidic precipitation.",
      "Damage to Ecosystems":
        "Pollutants can harm wildlife and degrade water and soil quality.",

      "Reduced Visibility":
        " Particulate matter causes smog, atffacting transportion and outdoor activities.",
    }

  return (
    <div>
      <Card>
        <CardContent sx={{ marginTop: 1 }}>
          <Typography sx={{ fontSize: "1.6rem", color: "#40a0e0" }}>
            Effects of Air Polution
          </Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>
            Air polution has serious repercussions on both the enviroment and human health:
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

export default Effect;