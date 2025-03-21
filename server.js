const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;


const apiKey = "ef82bddca875fb58ba238f1f221e88fb";

app.use(cors());

app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: "Missing city parameter" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`🌤️ Weather server is running at http://localhost:${PORT}`);
});
