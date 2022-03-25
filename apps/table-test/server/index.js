const express = require("express");
const axios = require('axios');
const config = require('./config');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({message: "Hello from server!"});
});

app.get("/get-ticket", async (req, res) => {
  const { data } = await axios.post(config.ticketURL(), config.ticketReqBody(), config.ticketReqConfig);
  console.log(data.Ticket)
  res.json({ ticket: data.Ticket })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

