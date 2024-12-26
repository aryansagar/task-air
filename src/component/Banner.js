import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Banner = () => {
  return (
    <div>
      <Card>
        <CardContent sx={{ marginTop: 1 }}>
          <Typography sx={{ fontSize: '1.6rem',color:"#40a0e0" }}>
            What is Air Pollution?
          </Typography>
          <Typography sx={{ fontSize: '0.9rem' }}>
            Air pollution is the contamination of atmosphare by harmful substances, including chemicals patticulates, and biological materials.these pollutants can cause adverse effects on human health, wildlife , and the enviroment.It is one of the most pressing enviromental challenges facing the world today, with far-reaching impacts on global ecosystem and the economy.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Banner;
