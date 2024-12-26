import React from "react";
import { Typography, List, ListItem, ListItemText, Paper, Card, CardContent } from "@mui/material";

function App() {
  const statistics = [
    "The world population is over 8 billion.",
    "The global average temperature has risen by 1.2°C since the late 19th century.",
    "Approximately 1 billion people live in extreme poverty.",
    "Every year, humans emit over 50 billion metric tons of carbon dioxide.",
    "Over 80% of the world's energy comes from fossil fuels.",
  ];

  return (
    <div>
      <Card>
        <CardContent sx={{ marginTop: 1 }}>
          <Typography sx={{ fontSize: "1.6rem", color: "#40a0e0" }}>
            What is Air Pollution?
          </Typography>
          
            <List>
              {statistics.map((stat, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={stat.endsWith('.') ? stat : `${stat}.`} // Ensure each item ends with a dot.
                  />
                </ListItem>
              ))}
            </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
