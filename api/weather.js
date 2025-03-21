const axios = require("axios");

module.exports = async (req, res) => {
  const { query } = req;
  const city = query.city;

  if (!city) {
    return res.status(400).json({ error: "Missing city parameter" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );
    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch weather data" });
  }
};