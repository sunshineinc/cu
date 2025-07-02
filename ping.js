const axios = require("axios");

setInterval(async () => {
  try {
    await axios.get("https://SEU-BOT.replit.dev");
    console.log("Ping enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar ping:", error.message);
  }
}, 60000); // a cada 60 segundos
