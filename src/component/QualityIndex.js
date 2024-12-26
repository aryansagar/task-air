import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";

const AirQualityApp = () => {
  const [city, setCity] = useState("");
  const [airQuality, setAirQuality] = useState(null);
  const [error, setError] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchAirQuality = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    setError("");
    try {
      const response = await axios.get(
        `https://api.waqi.info/feed/${city}/?token=377f469bff86df5256545d6373d8bc04024fd79b`
      );
      setAirQuality(response.data);
    } catch (error) {
      setError("Failed to fetch air quality data.");
    }
  };

  return (
    <Card>
      <CardContent sx={{ marginTop: 1 }}>
        <Typography sx={{ fontSize: "1.6rem", color: "#40a0e0" }}>
          Air Quality Index(AQI)
        </Typography>
        <div
          style={{
            display: "flex",
            alignItem: "center",
          }}
        >
          <div>
            <TextField
              label="Enter City Name"
              variant="outlined"
              value={city}
              onChange={handleCityChange}
              sx={{ marginBottom: 2, marginRight: 2, width: "40rem" }}
            />
          </div>

          <div>
            <Button
              variant="contained"
              onClick={fetchAirQuality}
              sx={{ height: "3.5rem" }}
            >
              Check Air Quality
            </Button>
          </div>
        </div>

        {error && (
          <Typography color="error" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {airQuality && airQuality.status === "ok" && (
          <Card sx={{ marginTop: 3 }}>
            <CardContent>
              <Typography variant="h6">
                The AQI is {airQuality.data.city.name}{" "}
              </Typography>
              <Typography variant="body1">{airQuality.data.aqi}</Typography>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default AirQualityApp;
